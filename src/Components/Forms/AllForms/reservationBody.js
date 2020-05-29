import React from "react";
import dayjs from "dayjs";
import ReservationField from "../../Common/InputField/reservationField";

const ReservationBody = ({ handleChange, data, price }) => {
    return (
        <div className="uk-width-1-1 uk-margin-left uk-grid-small" uk-grid="true">
            <div className="uk-width-1-3 uk-text-left">
                <label className="uk-form-label uk-text-capitalize uk-margin-small-left">Status:</label>
                <div>
                    <select className="uk-select" name="status" id="status">
                        <option value={data.status}>New</option>
                        <option value={data.status}>In progress</option>
                        <option value={data.status}>Closed</option>
                    </select>
                </div>
            </div>
            <ReservationField
                className="uk-width-2-3 uk-text-left"
                name="name"
                id="Client name"
                type="text"
                handleChange={handleChange}
                value={data.name}
            />

            <ReservationField
                className="uk-width-1-3@s uk-text-left"
                name="number_of_guests"
                id="Number of guests"
                type="text"
                handleChange={handleChange}
                value={data.number_of_guests}
            />
            <ReservationField
                className="uk-width-1-3@s uk-text-left"
                name="final_date"
                id="From"
                type="date"
                value={dayjs(data.final_date).format("YYYY-MM-DD")}
                handleChange={handleChange}
            />
            <ReservationField
                className="uk-width-1-3@s uk-text-left"
                name="initial_date"
                id="To"
                type="date"
                value={dayjs(data.initial_date).format("YYYY-MM-DD")}
                handleChange={handleChange}
            />
            <ReservationField
                className="uk-width-1-1 uk-text-left"
                name="interests"
                id="Interests"
                type="text"
                handleChange={handleChange}
                value={data.interests}
            />
            <ReservationField
                className="uk-width-1-2 uk-text-left"
                name="cities"
                id="Cities"
                type="text"
                handleChange={handleChange}
                value={data.cities}
            />
            <div className="uk-width-1-2 uk-tex-left">
                <label className="uk-form-label uk-text-capitalize uk-margin-small-left">Total price:</label>
                <input
                    className="uk-input uk-text-right"
                    id="day_price"
                    type="number"
                    name="price"
                    value={price}
                />
            </div>
        </div>
    )
}

export default ReservationBody;