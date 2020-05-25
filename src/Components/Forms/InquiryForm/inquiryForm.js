import React, { Component } from "react";
import { createInquiry } from "../../../services/inquiryServices";
import dayjs from "dayjs";
import InputField from "../../Common/InputField/inputField";
import TextAreaField from "../../Common/TextAreaField/textAreaField";

class RestaurantForm extends Component {
    state = {
        inquiry: {}
    };

    handleChange = (e) => {
        let { inquiry } = this.state;
        inquiry = { ...inquiry, [e.target.name]: e.target.value };
        this.setState({ inquiry });
    };

    handleImagesChange = (e) => {
        let { inquiry } = this.state;
        inquiry = { ...inquiry, [e.target.name]: e.target.value.split(",") };
        this.setState({ inquiry });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { inquiry } = this.state;
        const { history } = this.props;
        createInquiry(inquiry)
            .then((res) => {
                history.push("/");
            })
            .catch((res) => console.error(res.response));
    };

    render() {
        const { inquiry } = this.state;
        return (
            <div className="uk-modal-body">
                <form className="uk-width-2-3" onSubmit={this.handleSubmit}>
                    <legend className="uk-legend">New Inquiry</legend>
                    <InputField
                        name="number_of_guests"
                        type="number"
                        min="1"
                        value={inquiry.guest_number}
                        handleChange={this.handleChange}
                        placeholder="Guest number"
                    />
                    <InputField
                        name="initial_date"
                        handleChange={this.handleChange}
                        type="date"
                        value={dayjs(inquiry.checkin).format("YYYY-MM-DD")}
                        placeholder="Start Date"
                    />
                    <InputField
                        name="final_date"
                        type="date"
                        value={dayjs(inquiry.checkout).format("YYYY-MM-DD")}
                        handleChange={this.handleChange}
                        placeholder="End Date"
                    />
                    <InputField
                        name="interests"
                        value={inquiry.interests}
                        placeholder="Interests"
                        handleChange={this.handleChange}
                    />
                    <InputField
                        name="cities"
                        value={inquiry.cities}
                        placeholder="Cities"
                        handleChange={this.handleChange}
                    />
                        <TextAreaField
                        name="comments"
                        value={inquiry.comments}
                        handleChange={this.handleChange}
                    />
                    <button type="submit" className="uk-button uk-button-primary uk-text-capitalize">
                        Create Inquiry
                    </button>
                </form>
            </div>
        )
    }
}

export default RestaurantForm;