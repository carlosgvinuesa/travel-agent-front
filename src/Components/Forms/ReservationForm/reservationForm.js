import React, { Component } from "react";
import { createReservation } from "../../../services/reservationServices";
import InputField from "../../Common/InputField/inputField";
import TextAreaField from "../../Common/TextAreaField/textAreaField";
import Slider from "../../Common/Slider/slider";

const services = {
    reservations: createReservation,
}

class ReservationForm extends Component {
    state = {
        data: {},
    };

    handleChange = (e) => {
        let { data } = this.state;
        data = { ...data, [e.target.name]: e.target.value };
        this.setState({ data });
    };

    handleImagesChange = (e) => {
        let { data } = this.state;
        data = { ...data, [e.target.name]: e.target.value.split(",") };
        this.setState({ data });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { data } = this.state;
        const { history } = this.props;
        const { path } = this.props.match;
        const model = path.split("/")[2];
        console.log("path:", path);
        services[model](data)
            .then((res) => {
                history.push("/");
            })
            .catch((res) => console.error(res.response));
    };

    render() {
        const { data } = this.state;
        const { path } = this.props.match;
        const model = path.split("/")[1];

        return (
            <div className="uk-width-1-1 uk-margin-top">
                <h1>{model.toUpperCase()}</h1>
                <div className="form-new">
                    <form className="uk-width-1-2 form-border" onSubmit={this.handleSubmit}>
                        <legend className="uk-legend uk-text-capitalize">New {model.slice(0, -1)}</legend>

                        <InputField
                            name="name"
                            id="Name"
                            value={data.name}
                            handleChange={this.handleChange}
                        />
                        <InputField
                            name="address"
                            id="Address"
                            value={data.address}
                            handleChange={this.handleChange}
                        />
                        <InputField
                            name="city"
                            id="City"
                            value={data.city}
                            handleChange={this.handleChange}
                        />
                        <InputField
                            name="type"
                            id="Type"
                            value={data.type}
                            handleChange={this.handleChange}
                        />
                        <InputField
                            name="interests"
                            id="Interests"
                            value={data.interests}
                            handleChange={this.handleChange}
                        />
                        <InputField
                            name="price"
                            id="Price"
                            value={data.price}
                            handleChange={this.handleChange}
                        />
                        <InputField
                            name="phone_numbers"
                            id="Phone Number"
                            value={data.phone_numbers}
                            handleChange={this.handleChange}
                        />
                        <InputField
                            name="contacts"
                            id="Contacts"
                            value={data.contacts}
                            handleChange={this.handleChange}
                        />
                        <TextAreaField
                            name="images"
                            value={data.images?.join(",")}
                            handleChange={this.handleImagesChange}
                            hint="separate multiple images by commas"
                        />
                        <TextAreaField
                            name="description"
                            value={data.description}
                            handleChange={this.handleChange}
                        />
                        <TextAreaField
                            name="comments"
                            value={data.comments}
                            handleChange={this.handleChange}
                        />
                        <button type="submit" className="uk-button uk-button-primary uk-text-capitalize">
                            Create {model.slice(0, -1)}
                        </button>
                    </form>

                    <div className="uk-width-1-2 uk-margin-left" uk-grid="true">
                        <div>
                            <div className="uk-card uk-card-default">
                                <div className="">
                                    {data ? (
                                        <h3 className="uk-card-title">{data.name}</h3>
                                    ) : null}
                                    {data ? Object.entries(data)
                                        .filter(item => item[0] !== "images" && item[0] !== "phone_numbers" && item[0] !== "name")
                                        .map((item, index) => (
                                            <div key={index} className="uk-margin-left uk-margin-small uk-text-left">
                                                <b className="uk-text-capitalize">{item[0]}:</b> {item[1]}
                                            </div>
                                        )) : null}
                                </div>
                                <div className="uk-card-media-bottom">
                                    <Slider images={data.images ? data.images : []} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default ReservationForm;