import React from "react";
import DataForm from "../AllForms/dataForm";

const DailyForm = () => {

    let models = ["transports", "hotels", "restaurants", "experiences"];

    return (
        <div className="uk-modal-body">
            {models.map((item, index) => (
                <DataForm key={index} model={item} />
            ))}
        </div>
    )
}

export default DailyForm;
