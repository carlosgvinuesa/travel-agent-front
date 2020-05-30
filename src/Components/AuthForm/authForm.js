import React, { Component } from "react";
import { Link } from "react-router-dom";
import { login, signup } from "../../services/authServices";
import AppContext from "../../AppContext";
import { buildNotification } from "../../utils/notification";

class AuthForm extends Component {
  static contextType = AppContext;
  state = {
    user: {},
  };

  handleChange = (e) => {
    let { user } = this.state;
    user = { ...user, [e.target.name]: e.target.value };
    this.setState({ user });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isLogin = this.props.location.pathname === "/";
    const { setUser } = this.context;
    const { user: credentials } = this.state;
    const action = isLogin ? login : signup;
    const { history } = this.props;
    const nextRoute = isLogin ? "/home" : "/";
    action(credentials)
      .then((res) => {
        if (isLogin) {
          const { user } = res.data;
          localStorage.setItem("user", JSON.stringify(user));
          setUser(user);
        }
        history.push(nextRoute);
      })
      .catch((err) => {
        console.log(err);
        buildNotification(err.response.data.msg, "danger", "close");
      });
  };

  render() {
    const isLogin = this.props.location.pathname === "/";
    console.log("Auth props:", this.props);

    return (
      <section className="uk-section">
      <div className="uk-container uk-flex uk-flex-center">
          <div className="uk-width-1-4">
              <h3 className="text">{isLogin ? "Login" : "Signup"}</h3>
              <form
              onSubmit={this.handleSubmit} 
              className="uk-width-1-1 uk-form-stacked uk-flex uk-flex-center uk-flex-column"
              >
                  {!isLogin ? (
                      <div>
                          <div className="uk-margin">
                              <div className="uk-inline">
                                  <span
                                      className="uk-form-icon uk-form-icon-flip"
                                      uk-icon="icon: user"
                                  ></span>
                                  <input
                                      onChange={this.handleChange}
                                      placeholder="Name"
                                      id="name"
                                      name="name"
                                      className="uk-input"
                                      type="text"
                                      required
                                  />
                              </div>
                          </div>
                          <div>
                              <div className="uk-inline">
                                  <span
                                      className="uk-form-icon uk-form-icon-flip"
                                      uk-icon="icon: user"
                                  ></span>
                                  <input
                                      onChange={this.handleChange}
                                      placeholder="Last name"
                                      id="last_name"
                                      name="last_name"
                                      className="uk-input"
                                      type="text"
                                      required
                                  />
                              </div>
                          </div>        
                      </div>                
                  ) : null}
                  <div className="uk-margin">
                      <div className="uk-inline">
                          <span
                              className="uk-form-icon uk-form-icon-flip"
                              uk-icon="icon: mail"
                          ></span>
                          <input
                              onChange={this.handleChange}
                              placeholder={"Email"}
                              id="email"
                              name="email"
                              className="uk-input"
                              type="email"
                              required
                          />
                      </div>
                      <div className="uk-margin">
                          <div className="uk-inline">
                              <span
                                  className="uk-form-icon uk-form-icon-flip"
                                  uk-icon="icon: lock"
                              ></span>
                              <input
                                  onChange={this.handleChange}
                                  placeholder="Password"
                                  id="password"
                                  name="password"
                                  className="uk-input"
                                  type="password"
                                  required
                              />
                          </div>
                      </div>
                  </div>
                  {isLogin ? (
                      <div className="text">
                          Don't have an account?{" "}
                          <Link className="uk-text-primary" to="/signup">
                              Sign up
                          </Link>
                      </div>
                  ) : null}
                  <button className="uk-button auth-button">
                      {isLogin ? "Login" : "Signup"}
                  </button>
              </form>
          </div>
      </div>
  </section>   
    );
  } 
}

AuthForm.contextType = AppContext;

export default AuthForm;