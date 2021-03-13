import React, { Component } from "react";

import { connect } from "react-redux";
import { createProduct } from "../../store/actions/productActions";
import { storage } from "../../config/fbConfig";

class CreateProduct extends Component {
  state = {
    name: "",
    description: "",
    price: "",
    image: "",
    isLoading: false
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleFileChange = (e) => {
    if (e.target.files[0]) {
      this.setState({
        [e.target.id]: e.target.files[0],
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, description, price, image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            this.setState({ image: url });
            this.props.createProduct({
              name, description, price, image
            });
            this.props.history.push("/menu");
          });
      }
    );
  };

  renderSpinner = () => {
    const { name, description, price, image } = this.state;
    if (name !== "" && description !== "" && price !== "" && image !== "") {
      this.setState({ isLoading: true });
    }
  }

  render() {
    const spinner = <div className="mx-3 spinner-border" role="status"></div>;

    return (
      <div className="container">
        <div className="row">
        <div className="col-1"></div>
          <div className="col-lg-6 col-md-7 col-sm-8">
          <h1>Add New Product</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="name"
                  onChange={this.handleInputChange}
                  required
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  onChange={this.handleInputChange}
                  required
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  onChange={this.handleInputChange}
                  required
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  onChange={this.handleFileChange}
                  required
                ></input>
              </div>
              <button type="submit" className="btn btn-primary" onClick={this.renderSpinner}>
                Create
              </button>
              { this.state.isLoading ? spinner : null }
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProduct: (product) => dispatch(createProduct(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct);
