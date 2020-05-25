import React, { Component } from "react";
import { createExperience } from "../../../services/experienceServices";
import { createRestaurant } from "../../../services/restaurantServices";
import { createHotel } from "../../../services/hotelServices";
import InputField from "../../Common/InputField/inputField";
import TextAreaField from "../../Common/TextAreaField/textAreaField";

const services = {
    experiences: createExperience,
    restaurants: createRestaurant,
    hotels: createHotel,
}

class SharedForm extends Component {
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
        const model = path.split("/")[1];
        console.log("data:", data);
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
            <div className="uk-modal-body">
                <form className="uk-width-2-3" onSubmit={this.handleSubmit}>
                    <legend className="uk-legend uk-text-capitalize">New {model.slice(0, -1)}</legend>

                    <InputField
                        name="name"
                        id="Name"
                        value={data.name}
                        placeholder="Name"
                        handleChange={this.handleChange}
                    />
                    <InputField
                        name="address"
                        id="Address"
                        value={data.address}
                        placeholder="Address"
                        handleChange={this.handleChange}
                    />
                    <InputField
                        name="city"
                        id="City"
                        value={data.city}
                        placeholder="City"
                        handleChange={this.handleChange}
                    />
                    <InputField
                        name="type"
                        id="Type"
                        value={data.type}
                        placeholder="Type"
                        handleChange={this.handleChange}
                    />
                    <InputField
                        name="interests"
                        id="Interests"
                        value={data.interests}
                        placeholder="Interests"
                        handleChange={this.handleChange}
                    />
                    <InputField
                        name="price"
                        id="Price"
                        value={data.price}
                        placeholder="Price"
                        handleChange={this.handleChange}
                    />

                    {model === "restaurants" ? (
                        <div>
                            <InputField
                                name="discount"
                                id="Discount"
                                value={data.discount}
                                placeholder="Discount offered"
                                handleChange={this.handleChange}
                            />
                            <InputField
                                name="food_types"
                                id="Food type"
                                value={data.food_types}
                                placeholder="Type of food offered"
                                handleChange={this.handleChange}
                            />
                        </div>
                    ) : null}

                    <InputField
                        name="phone_numbers"
                        id="Phone Number"
                        value={data.phone_numbers}
                        placeholder="Phone number"
                        handleChange={this.handleChange}
                    />
                    <InputField
                        name="contacts"
                        id="Contacts"
                        value={data.contacts}
                        placeholder="Contacts"
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
            </div>
        )
    }
}

export default SharedForm;