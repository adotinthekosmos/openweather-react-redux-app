import React, { Component } from "react";
import "./App.css";
import Login from "../components/Login/Login";
import WeatherContainer from "../components/WeatherContainer/WeatherContainer";
import { fakeAuth } from "../components/Login/Login";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container-fluid" />
          <Route path="/" exact={true} component={Login} />
          <Route path="/login" component={Login} />
          <PrivateRoute
            authed={fakeAuth.isAuthenticated}
            path="/weather"
            component={WeatherContainer}
          />
        </div>
      </Router>
    );
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default App;
