import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthForm from "./Components/AuthForm/authForm";
import Collection from "./Components/Collection/collection"
import Reservation from "./Components/Collection/reservation";
import ReservationForm from "./Components/Forms/AllForms/reservationForm";
import Home from "./Components/Home/home";
import userHome from "./Components/Home/userHome";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={userHome} />
    {/* <Route exact path="/login" component={AuthForm} /> */}
    <Route exact path="/signup" component={Home} />
    <Route exact path="/reservations" component={Reservation}/>
    <Route exact path="/reservations/new" component={ReservationForm}/>
    <Route exact path="/collection/:model" component={Collection} />
  </Switch>
);

export default Routes;
