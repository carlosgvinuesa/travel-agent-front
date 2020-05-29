import React, { Component } from "react";
import AppContext from "../../../AppContext";
import { createExperience } from "../../../services/experienceServices";
import { createRestaurant } from "../../../services/restaurantServices";
import { createHotel } from "../../../services/hotelServices";
import { createTransport } from "../../../services/transportServices";
import SharedForm from "../AllForms/sharedForm";
import TransportForm from "../AllForms/transportForm";
// import Card from "../../Card/card";
import CardDetail from "../../CardDetail/cardDetail"
import Slider from "../../Common/Slider/slider";
import UIkit from "uikit";

const createServices = {
    experiences: createExperience,
    restaurants: createRestaurant,
    hotels: createHotel,
    transports: createTransport,
}

class CreateModal extends Component {
    static contextType = AppContext;
    state = {
        data: {},
    };

    handleChange = (e) => {
        let { data } = this.state;
        let { model } = this.props
        data = { ...data, [e.target.name]: e.target.value };
        if (model === "transports") {
            const service_type = document.getElementById("servie_type").value
            const vehicle_type = document.getElementById("vehicle_type").value
            data = { ...data, "service_type": service_type, "vehicle_type": vehicle_type }
        }
        this.setState({ data });
    };

    handleImagesChange = (e) => {
        let { data } = this.state;
        data = { ...data, [e.target.name]: e.target.value.split(",") };
        this.setState({ data });
    };

    handleSubmit = () => {
        const { data } = this.state;
        const { model } = this.props;
        console.log("Data:", data)
        createServices[model](data)
            .then(() => {
                UIkit.modal(`#${model}-new`).hide();
            })
            .catch((err) => console.error(err.response));
    };

    render() {
        const { data } = this.state;
        const { model, title } = this.props;

        return (
            <div id={`${model}-new`} className="uk-modal-container" uk-modal="true">
                <div className="uk-modal-dialog">
                    <button className="uk-modal-close-default" type="button" uk-close="true"></button>

                    <div className="uk-modal-header">
                        <h2 className="uk-modal-title">{`New ${title}`}</h2>
                    </div>

                    <div className="uk-flex uk-width-1-1">
                        <div className="uk-modal-body uk-width-1-2" uk-overflow-auto="true">
                            <div>
                                {model === "transports" ? (
                                    <TransportForm
                                        handleChange={this.handleChange}
                                        handleImagesChange={this.handleImagesChange}
                                        data={data}
                                        model={model}
                                    />
                                ) : (
                                        <SharedForm
                                            handleChange={this.handleChange}
                                            handleImagesChange={this.handleImagesChange}
                                            data={data}
                                            model={model}
                                        />
                                    )}
                            </div>
                        </div>
                        <div className="uk-width-1-2">
                            <CardDetail {...data} model={model} demo="true" />
                        </div>
                        {/* <div className="uk-width-1-4 uk-margin-small-right">
                            <Slider images={data.images ? data.images : []} />
                        </div> */}
                    </div>

                    <div className="uk-modal-footer uk-text-right">
                        <button className="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                        <button className="uk-button uk-button-primary" type="button" onClick={this.handleSubmit}>Save</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateModal;