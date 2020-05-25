import React, { Component } from "react";
import "./App.css";
import Routes from "./Routes";
import Navbar from "./Components/Navbar/navbar";
import AppContext from "./AppContext";
import { withRouter } from "react-router";
import { logout } from "./services/authServices";
// import { denormalizeData, normalizeData } from "./utils/dataUtils";
// import { getProperties } from "./services/propertyServices";

class App extends Component {
  state = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    base: {},
  };

  setUser = (user) => {
    this.setState({ user });
  };

  setBase = (base) => {
    this.setState({ base });
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
    const {
      state,
      setUser,
      logout,
      base,
      setBase,
    } = this;
    return (
      <AppContext.Provider
        value={{
          state,
          setUser,
          logout,
          base,
          setBase,
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
