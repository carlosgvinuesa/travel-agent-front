import React, { Component } from "react";
import { Link } from "react-router-dom";

class Reservation extends Component {
    state = {
        draw: ""
    }


    render() {
        return (
            <div>
                <h1 className="uk-margin-top uk-text-muted">RESERVATIONS</h1>
                <Link className="uk-button uk-button-default" to="/reservations/new">New Reservation</Link>
            </div>
        )
    }
}

export default Reservation;