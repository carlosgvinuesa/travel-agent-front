import React, { Component } from "react";
import { createReservation } from "../../../services/reservationServices";
import DailyModal from "../AllModals/dailyModal";
import ReservationBody from "../AllForms/reservationBody";
import UIkit from "uikit";

class ReservationForm extends Component {
    state = {
        data: {},
        schedule: [],
        cost: 0,
        city: "",
    };

    createDays = () => {
        let { number_of_days } = this.state.data;
        let days = [];
        for (let i = 1; i <= number_of_days; i++) {
            days.push(
                <button key={i}
                    className="left uk-button uk-button-default"
                    uk-toggle={"target: #modal-day"}
                    type="button"
                >{`Day ${i}`}
                </button>
            )
        }
        return days;
    }

    handleChange = (e) => {
        let { data, city } = this.state;
        if (data.final_date) {
            let { final_date, initial_date } = this.state.data;
            let difference_in_time = new Date(final_date).getTime() - new Date(initial_date).getTime();
            let difference_in_days = Math.abs(difference_in_time / (1000 * 3600 * 24)) + 1;
            data = { ...data, "number_of_days": difference_in_days }
            this.setState({ data });
        }
        if (data.cities) {
            let { cities } = this.state.data;
            city = cities;
            this.setState({ city });
        }
        data = { ...data, [e.target.name]: e.target.value };
        this.setState({ data });
    };

    handleDaily = (price) => {
        let { schedule, cost } = this.state;
        let transport = document.getElementById("transports").value;
        let hotel = document.getElementById("hotels").value;
        let restaurant = document.getElementById("restaurants").value;
        let experience = document.getElementById("experiences").value;
        let daily = { "transport": transport, "hotel": hotel, "restaurant": restaurant, "experience": experience, "day_price": price }
        schedule.push(daily);
        cost = cost + price;
        this.setState({ schedule, cost })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let { data, schedule, cost, city } = this.state;
        const { history } = this.props;
        let status = document.getElementById("status").value;
        data = { ...data, "status": status, "schedule": schedule, "cost": cost };
        createReservation(data)
            .then((res) => {
                history.push("/collection/reservations");
            })
            .catch((res) => console.error(res.response));
    };

    render() {
        const { data, cost, city } = this.state;
        console.log("City:", city);
        const { createDays, handleChange, handlePrice, handleSubmit, handleDaily } = this;
        return (

            <div>
                <form className="uk-width-1-1 uk-grid-small" uk-grid="true">
                    <legend className="uk-legend uk-margin-top">New Reservation</legend>
                    <div className="uk-width-1-2 uk-margin-top">
                        <ReservationBody
                            handleChange={handleChange}
                            data={data}
                            price={cost}
                        />
                    </div>
                    <div className="uk-width-1-3 uk-margin-top uk-text-left uk-margin-large-left">

                        <label className="uk-form-label uk-text-capitalize">Schedule:</label>
                        <div>{createDays()}</div>

                        <DailyModal handlePrice={handlePrice} handleDaily={handleDaily} city={city} />

                        <div className="uk-margin uk-width-1-1 uk-text-left">
                            <label className="uk-form-label uk-text-capitalize uk-margin-small-left">Comments:</label>
                            <textarea
                                className="uk-textarea"
                                rows="5"
                                name="comments"
                                type="text"
                                handleChange={handleChange}
                                value={data.comments}>
                            </textarea>
                        </div>
                    </div>
                </form>
                <button
                    type="submit"
                    className="uk-width-1-3 button uk-align-center"
                    onClick={handleSubmit}>
                    SAVE
                </button>
            </div>
        )
    }
}

export default ReservationForm;
