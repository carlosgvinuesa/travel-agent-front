import React from "react";
import DataForm from "../AllForms/dataForm";

const DailyForm = ({ handlePrice }) => {

    let models = ["transports", "hotels", "restaurants", "experiences"];

    return (
        <div className="uk-modal-body">
            {models.map((item, index) => (
                <DataForm key={index} model={item} handlePrice={handlePrice} />
            ))}
        </div>
    )
}

export default DailyForm;