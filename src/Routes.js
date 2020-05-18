import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthForm from "./Components/AuthForm/authForm";


const Routes = () => (
  <Switch>
    <Route exact path="/login" component={AuthForm} />
    <Route exact path="/signup" component={AuthForm} />
  </Switch>
);

export default Routes;
