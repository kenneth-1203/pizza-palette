import React, { Component } from "react";

export default class SignUp extends Component {
  
  state ={
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input type="text" className="form-control" id="firstName" onChange={this.handleChange}></input>
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input type="text" className="form-control" id="lastName" onChange={this.handleChange}></input>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="email" onChange={this.handleChange}></input>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="checkbox"
            ></input>
            <label className="form-check-label" htmlFor="checkbox">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
