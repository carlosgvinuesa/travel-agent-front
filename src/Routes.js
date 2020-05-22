import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthForm from "./Components/AuthForm/authForm";
import Collection from "./Components/Collection/collection"


const Routes = () => (
  <Switch>
    <Route exact path="/login" component={AuthForm} />
    <Route exact path="/signup" component={AuthForm} />
    <Route exact path="/collection/:model" component={Collection} />
  </Switch>
);

export default Routes;
