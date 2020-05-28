import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthForm from "./Components/AuthForm/authForm";
import ClientForm from "./Components/Forms/ClientForm/clientForm";
import TransportForm from "./Components/Forms/TransportForm/transportForm";
import InquiryForm from "./Components/Forms/InquiryForm/inquiryForm";
import SharedForm from "./Components/Forms/SharedForm/sharedForm";
import Collection from "./Components/Collection/collection"
import ReservationForm from "./Components/Forms/ReservationForm/reservationForm"



const Routes = () => (
  <Switch>
    <Route exact path="/login" component={AuthForm} />
    <Route exact path="/signup" component={AuthForm} />
    <Route exact path="/hotels/new" component={SharedForm}/>
    <Route exact path="/clients/new" component={ClientForm}/>
    <Route exact path="/restaurants/new" component={SharedForm}/>
    <Route exact path="/experiences/new" component={SharedForm}/>
    <Route exact path="/transports/new" component={TransportForm}/>
    <Route exact path="/inquiries/new" component={InquiryForm}/>
    <Route exact path="/reservations/new" component={ReservationForm}/>
    <Route exact path="/collection/:model" component={Collection} />
  </Switch>
);

export default Routes;
