import React, { Component } from "react";
import AppContext from "../../../AppContext";
import { updateExperience } from "../../../services/experienceServices";
import { updateRestaurant } from "../../../services/restaurantServices";
import { updateHotel } from "../../../services/hotelServices";
import { updateTransport } from "../../../services/transportServices";
import SharedForm from "../AllForms/sharedForm";
import TransportForm from "../AllForms/transportForm";
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
    handleSubmit = () => {
        const { model, id, data } = this.props;
        const params = { id, data }
        updateServices[model](params)
            .then(() => {
                UIkit.modal(`#${model}-edit`).hide();
            })
            .catch((err) => console.error(err.response));
    };

    render() {

        const { model, title, id, data, handleChange, handleImagesChange } = this.props;

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
                                        handleChange={handleChange}
                                        handleImagesChange={handleImagesChange}
                                        data={data}
                                        model={model}
                                    />
                                ) : (
                                        <SharedForm
                                            handleChange={handleChange}
                                            handleImagesChange={handleImagesChange}
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
                            <Slider images={data !== undefined ? data.images : []} />
                        </div>
                    </div>

                    <div className="uk-modal-footer uk-text-right">
                        <button className="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                        <button className="uk-button uk-button-primary" type="button" onClick={() => this.handleSubmit()}>Save</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default EditModal;