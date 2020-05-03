import React, { Component } from 'react';
import './Form.css';


const initialState = {
  name: "",
  email: "",
  phone: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: "",
  phoneError:""

};

class Form extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let phoneError ="";
    let passwordError = "";

    if (!this.state.name) {
      nameError = "Name cannot be blank";
    }

    if (!(this.state.email.includes("@")&&this.state.email.includes(".com"))) {
      emailError = "Invalid email";
    }

    if (!this.state.phone) {
        phoneError = "Phone cannot be blank";
      }

    if (emailError || nameError || phoneError||passwordError) {
      this.setState({ emailError, nameError,phoneError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
          </div>
        </div>
        <div>
          <input
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.passwordError}
          </div>
        </div>
        <div>
          <input
            type="phone"
            name="phone"
            placeholder="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.phoneError}
          </div>
        </div>
        <button type="submit">submit</button>
      </form>
    );
  }
}
export default Form;