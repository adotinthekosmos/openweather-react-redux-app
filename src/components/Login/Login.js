import React, { Component } from "react";
import "./Login.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

import authenticateLogin from "../../actions/authenticateLogin";
import { connect } from "react-redux";
class Login extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   redirectToReferrer: false
    // };
  }

  login = e => {
    e.preventDefault();
    const valueOfUsername = this.getUsername.value;
    const valueOfPassword = this.getPassword.value;
    fakeAuth.authenticate(() => {
      // console.log({
      //   valueOfUsername: valueOfUsername,
      //   valueOfPassword: valueOfPassword
      // });
      if (valueOfUsername === "" && valueOfPassword === "") {
        this.props.authLogin(false, true);
      }
      if (valueOfPassword !== "" && valueOfPassword !== "") {
        this.props.authLogin(false, false);
      }
      if (valueOfUsername === "khoateamer" && valueOfPassword === "123") {
        this.props.authLogin(true, false);
      }

      console.log(this.props.stateStore.fieldIsEmpty);
    });
  };

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: "/weather" }
    };
    console.log(this.props.location);
    const { redirectToReferrer } = this.props.stateStore;
    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <section className="login-container">
        <div className="login-form-container h-100">
          <form className="login-form" onSubmit={this.login}>
            <p className="login-title">
              Login to <br />
              <span>Weather Awesome</span>
            </p>

            <div className="login-field">
              <p className="field-label">
                <i className="icon ion-ios-person" /> Username:
              </p>
              <input
                value="khoateamer"
                type="text"
                placeholder="user@email.com"
                ref={input => {
                  this.getUsername = input;
                }}
              />
            </div>
            <div className="login-field">
              <p className="field-label">
                <i className="icon ion-ios-key" /> Password:
              </p>
              <input
                value="123"
                type="password"
                placeholder="Enter password"
                ref={input => {
                  this.getPassword = input;
                }}
              />
            </div>

            {this.props.stateStore.redirectToReferrer === false &&
            this.props.stateStore.fieldIsEmpty === false ? (
              <p className="login-warning">
                Incorrect username or password !!!
              </p>
            ) : (
              ""
            )}

            <button className="login-btn">
              <span>login</span>
            </button>

            <i className="icon ion-ios-sunny sun-login" />
          </form>
        </div>
      </section>
    );
  }
}

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  }
};

const mapDispatchToProps = dispatch => {
  return {
    authLogin: (redirectStatus, fieldIsEmpty) => {
      dispatch(authenticateLogin(redirectStatus, fieldIsEmpty));
    }
  };
};

const mapStateToProps = state => ({
  stateStore: state
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
