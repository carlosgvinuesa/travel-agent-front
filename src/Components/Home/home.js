import React, { Component } from "react";
import ParticleBackground from "./particles";
import AuthForm from "../AuthForm/authForm"
import AppContext from "../../AppContext";
import './home.css'

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.location.pathname === "/" ? (
            <div className="title">
              <img src="images/logo-white.png" />
              <AuthForm {...this.props} />
            </div>
          ) : (
              <div className="title">
                <AuthForm {...this.props} />
              </div>
            )}

          <ParticleBackground />
        </div>
      </div>
    );
  }
}

export default Home;
