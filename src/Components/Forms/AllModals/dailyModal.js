import React, { Component } from "react";
import DailyForm from "../AllForms/dailyForm";
import UIkit from "uikit";

class DailyModal extends Component {
    state = {
        price: 0,
    }

    handlePrice = () => {
        let { price } = this.state;
        let transport_price = document.getElementById("transports_price").value;
        let hotel_price = document.getElementById("hotels_price").value;
        let restaurant_price = document.getElementById("restaurants_price").value;
        let experience_price = document.getElementById("experiences_price").value;
        price = parseInt(transport_price) + parseInt(hotel_price) + parseInt(restaurant_price) + parseInt(experience_price);
        console.log(price)
        this.setState({ price })
    }

    render() {
        const { price } = this.state;
        let { handleDaily, city } = this.props;
        console.log("City daily modal:", city);

        return (
            <div>
                <div id="modal-day" uk-modal="true">
                    <div className="uk-modal-dialog">
                        <button className="uk-modal-close-default" type="button" uk-close="true"></button>
                        <div className="uk-modal-header">
                            <h2 className="uk-modal-title">Select itinerary:</h2>
                        </div>
                        <div className="uk-modal-body" uk-overflow-auto="true">
                            <DailyForm city={city}/>
                            <div className="uk-width-1-3 uk-text-left uk-flex uk-flex-column uk-align-right uk-margin-medium-right">
                                <label className="uk-form-label uk-text-capitalize uk-margin-small-left">Total price:</label>
                                <input
                                    className="uk-input uk-text-right"
                                    id="day_price"
                                    type="number"
                                    name="price"
                                    value={price}
                                    onChange={this.handlePrice}
                                />
                            </div>
                        </div>
                        <div className="uk-modal-footer uk-text-right">
                            <button className="uk-button uk-button-default" type="button" onClick={() => this.handlePrice()}>Update price</button>
                            <button className="uk-button uk-button-primary" type="button" onClick={() => handleDaily(price)}>Save</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default DailyModal;