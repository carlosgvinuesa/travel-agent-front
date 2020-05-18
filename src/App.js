import React, { Component } from "react";
import Navbar from "./Components/Navbar/navbar";
import "./App.css";
import Routes from "./Routes";
import AppContext from "./AppContext";
import { withRouter } from "react-router";
import { logout } from "./services/authServices";
// import { denormalizeData, normalizeData } from "./utils/dataUtils";
// import { getProperties } from "./services/propertyServices";

class App extends Component {
  state = {
    user: {},
    // user: JSON.parse(localStorage.getItem("user")) || {} (asi estaba)
  };

  setUser = (user) => {
    this.setState({ user });
  };

  logout = () => {
    const { history } = this.props;
    logout().then(() => {
      localStorage.removeItem("user");
      this.setState({ user: {} });
      history.push("/login");
    });
  };

  render() {
    const { state, setUser, logout } = this;
    return (
      <AppContext.Provider
        value={{
          state,
          setUser,
          logout,
        }}
      >
        <div className="App">
          <Navbar user={state.user} logout={logout} />
          <Routes />
        </div>
      </AppContext.Provider>
    );
  }
}

const AppWithRouter = withRouter(App);

export default AppWithRouter;
