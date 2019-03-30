import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link
} from "react-router-dom";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.password = React.createRef();
  }

  state = { redirectToReferrer: false };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.loginEvent(
      {
        name: this.name.current.value,
        password: this.password.current.value
      },
      () => {
        this.setState({ redirectToReferrer: true });
      }
    );
  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <form onSubmit={this.handleOnSubmit}>
        <label htmlFor="user_name">User Name : </label>
        <input id="user_name" required ref={this.name} />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" required id="password" ref={this.password} />
        <br />
        <button type="submit">Login</button>
        <Link to="/register">Register</Link>
      </form>
    );
  }
}
