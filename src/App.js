import React, { Component } from "react";
import "./App.css";
import Routes from "./Routes";
import Navbar from "./Components/Navbar/navbar";
import AppContext from "./AppContext";
import { withRouter } from "react-router";
import { logout } from "./services/authServices";
import { denormalizeData, normalizeData } from "./utils/dataUtils";


// import { getProperties } from "./services/propertyServices";

class App extends Component {
  state = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    base: {},
    filtered: {},
  };

  setUser = (user) => {
    this.setState({ user });
  };

  setBase = (base) => {
    this.setState({ base });
  };

  setFiltered = (filtered) => {
    this.setState({ filtered });
  };

  handleChange = (e) => {
    e.preventDefault();
    const { base } = this.state;
    const { setFiltered } = this;
    const withFilter = []
    const withNameFilter = denormalizeData(base).filter((x) =>
      x.name.toLowerCase().includes(e.target.value.toLowerCase()));
    const withCityFilter = denormalizeData(base).filter((x) =>
    x.city.toLowerCase().includes(e.target.value.toLowerCase()));
    withFilter.push(...withNameFilter, ...withCityFilter)
    const normWithFilter = normalizeData(withFilter)
    setFiltered(normWithFilter)
  };

  logout = () => {
    const { history } = this.props;
    logout().then(() => {
      localStorage.removeItem("user");
      this.setState({ user: {} });
      history.push("/");
    });
  };

  render() {
    const { state, setUser, logout, base, setBase, handleChange, setFiltered } = this;
    return (
      <AppContext.Provider
        value={{
          state,
          setUser,
          logout,
          base,
          setBase,
          handleChange,
          setFiltered
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
