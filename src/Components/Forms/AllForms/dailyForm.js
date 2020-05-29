import React from "react";
import DataForm from "../AllForms/dataForm";

const DailyForm = ({ city }) => {

    let models = ["transports", "hotels", "restaurants", "experiences"];
    console.log("Daily form city:", city)

    return (
        <div className="uk-modal-body">
            {models.map((item, index) => (
                <DataForm key={index} model={item} city={city} />
            ))}
        </div>
    )
}

export default DailyForm;
