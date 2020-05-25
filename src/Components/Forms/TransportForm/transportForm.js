import React, { Component } from "react";
import { createTransport } from "../../../services/transportServices";
import InputField from "../../Common/InputField/inputField";
import TextAreaField from "../../Common/TextAreaField/textAreaField";

class TransportForm extends Component {
    state = {
        transport: {}
    };

    handleChange = (e) => {
        let { transport } = this.state;
        transport = { ...transport, [e.target.name]: e.target.value };
        this.setState({ transport });
    };

    handleImagesChange = (e) => {
        let { transport } = this.state;
        transport = { ...transport, [e.target.name]: e.target.value.split(",") };
        this.setState({ transport });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let { transport } = this.state;
        const service_type = document.getElementById("servie_type").value
        const vehicle_type = document.getElementById("vehicle_type").value
        transport = { ...transport, "service_type": service_type, "vehicle_type": vehicle_type }
        const { history } = this.props;
        createTransport(transport)
            .then((res) => {
                history.push("/");
            })
            .catch((res) => console.error(res.response));
    };

    render() {
        const { transport } = this.state;
        return (
            <div className="uk-modal-body">
                <form className="uk-width-2-3" onSubmit={this.handleSubmit}>
                    <legend className="uk-legend">New Transport</legend>

                    <InputField
                        name="name"
                        id="Route"
                        value={transport.name}
                        placeholder="Add route"
                        handleChange={this.handleChange}
                    />
                    <div className="uk-margin">
                        <label className="uk-form-label uk-text-capitalize">Servie Type:</label>
                        <div>
                            <select className="uk-select" name="servie_type" id="servie_type">
                                <option value={transport.servie_type}>Luxury</option>
                                <option value={transport.servie_type}>Standard</option>
                            </select>
                        </div>
                    </div>
                    <div className="uk-margin">
                        <label className="uk-form-label uk-text-capitalize">Vehicle Type:</label>
                        <div>
                            <select className="uk-select" name="vehicle_type" id="vehicle_type">
                                <option value={transport.vehicle_type}>Car</option>
                                <option value={transport.vehicle_type}>Van</option>
                                <option value={transport.vehicle_type}>Wagon</option>
                            </select>
                        </div>
                    </div>
                    <InputField
                        name="price"
                        id="Price"
                        value={transport.price}
                        placeholder="Price per person"
                        handleChange={this.handleChange}
                    />
                    <TextAreaField
                        name="images"
                        value={transport.images?.join(",")}
                        handleChange={this.handleImagesChange}
                        hint="separate multiple images by commas"
                    />
                    <TextAreaField
                        name="description"
                        value={transport.description}
                        handleChange={this.handleChange}
                    />
                    <TextAreaField
                        name="comments"
                        value={transport.comments}
                        handleChange={this.handleChange}
                    />
                    <button type="submit" className="uk-button uk-button-primary uk-text-capitalize">
                        Create Transport
                    </button>
                </form>
            </div>
        )
    }
}

export default TransportForm;