import React, { Component } from "react";
import { connect } from "react-redux";
import { createProduct } from '../../store/actions/productActions';

class CreateProduct extends Component {
  state = {
    name: "",
    description: "",
    price: 0,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProduct(this.state);
  };

  render() {
    return (
      <div className="container">
        <h1>Add New Product</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Product Name
            </label>
            <input
              type="name"
              className="form-control"
              id="name"
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            ></input>
          </div>
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProduct: (product) => dispatch(createProduct(product))
    }
}

export default connect(null, mapDispatchToProps)(CreateProduct);