import React, { Component } from "react";
import DailyForm from "../AllForms/dailyForm";

class DailyModal extends Component {
    render() {
        let { handlePrice } = this.props;

        return (
            <div>
                <div id="modal-day" uk-modal="true">
                    <div className="uk-modal-dialog">
                        <button className="uk-modal-close-default" type="button" uk-close="true"></button>
                        <div className="uk-modal-header">
                            <h2 className="uk-modal-title">Select itinerary:</h2>
                        </div>
                        <div className="uk-modal-body">
                            <DailyForm handlePrice={handlePrice} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DailyModal;