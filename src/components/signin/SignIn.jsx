import React, { Component } from "react";
import "./SignIn.scss";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";

import { auth, signInWithGoogle } from "../../firebase/fbUtils";

export default class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({ email: "", password: "" });
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            label="email"
            handleChange={this.handleChange}
            required
          />
          {/* <label htmlFor="email">Email</label> */}
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="password"
            handleChange={this.handleChange}
            required
          />
          {/* <label htmlFor="password">Password</label> */}
          <div className="buttons">
            <Button type="submit">Sign In</Button>
            <Button isGoogleSignIn={true} onClick={signInWithGoogle}>
              Sign In With Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
