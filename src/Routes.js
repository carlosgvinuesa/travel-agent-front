import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthForm from "./Components/AuthForm/authForm";
import Collection from "./Components/Collection/collection"
import ReservationForm from "./Components/Collection/reservation";
import Home from "./Components/Home/home"



const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={AuthForm} />
    <Route exact path="/signup" component={AuthForm} />
    <Route exact path="/reservations" component={ReservationForm}/>
    <Route exact path="/reservations/new" component={ReservationForm}/>
    <Route exact path="/collection/:model" component={Collection} />
  </Switch>
);

export default Routes;
