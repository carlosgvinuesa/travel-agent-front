import React, { Component } from "react";
import AppContext from "../../../AppContext";
import { updateExperience } from "../../../services/experienceServices";
import { updateRestaurant } from "../../../services/restaurantServices";
import { updateHotel } from "../../../services/hotelServices";
import { updateTransport } from "../../../services/transportServices";
import { denormalizeData } from "../../../utils/dataUtils";
import SharedForm from "../AllForms/sharedForm";
import TransportForm from "../TransportForm/transportForm";
import Card from "../../Card/card";
import Slider from "../../Common/Slider/slider";
import UIkit from "uikit";

const updateServices = {
    experiences: updateExperience,
    restaurants: updateRestaurant,
    hotels: updateHotel,
    transports: updateTransport,
}

class EditModal extends Component {
    static contextType = AppContext;
    state = {
        data: {},
    };

    componentWillMount() {
        const { id } = this.props;
        const { base } = this.context.state;
        const result = denormalizeData(base).find(x => x._id === id);
        this.setState({ data: result });
    }

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
        const { model, id } = this.props;
        const params = {id, data}
        console.log("Data:", data)
        updateServices[model](params)
            .then(() => {
                UIkit.modal(`#${model}-edit`).hide();
            })
            .catch((err) => console.error(err.response));
    };

    render() {
        const { data } = this.state;
        const { model, title, id} = this.props;
        console.log("Edit ID:", id);

        return ( 
            <div id={`${model}-edit`} className="uk-modal-container" uk-modal="true">
                <div className="uk-modal-dialog">
                    <button className="uk-modal-close-default" type="button" uk-close="true"></button>

                    <div className="uk-modal-header">
                        <h2 className="uk-modal-title">{`Edit ${title}`}</h2>
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
                        <div className="uk-width-1-4">
                            <Card {...data} model={model} demo="true" />
                        </div>
                        <div className="uk-width-1-4 uk-margin-small-right">
                            <Slider images={data.images ? data.images : []} />
                        </div>
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

export default EditModal;