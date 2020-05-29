import React from "react";
import InputField from "../../Common/InputField/inputField";
import TextAreaField from "../../Common/TextAreaField/textAreaField";

const TransportForm = ({ handleChange, handleImagesChange, data }) => {
    return (
        <form>
            <InputField
                name="name"
                id="Route"
                value={data.name}
                handleChange={handleChange}
            />
            <div className="uk-margin">
                <label className="uk-form-label uk-text-capitalize">Servie Type:</label>
                <div>
                    <select className="uk-select" name="servie_type" id="servie_type">
                        <option value={data.servie_type}>Luxury</option>
                        <option value={data.servie_type}>Standard</option>
                    </select>
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label uk-text-capitalize">Vehicle Type:</label>
                <div>
                    <select className="uk-select" name="vehicle_type" id="vehicle_type">
                        <option value={data.vehicle_type}>Car</option>
                        <option value={data.vehicle_type}>Van</option>
                        <option value={data.vehicle_type}>Wagon</option>
                    </select>
                </div>
            </div>
            <InputField
                name="price"
                id="Price"
                value={data.price}
                placeholder="price per person"
                handleChange={handleChange}
            />
            <TextAreaField
                name="images"
                value={data.images?.join(",")}
                handleChange={handleImagesChange}
                hint="separate multiple images by commas"
            />
            <TextAreaField
                name="description"
                value={data.description}
                handleChange={handleChange}
            />
            <TextAreaField
                name="comments"
                value={data.comments}
                handleChange={handleChange}
            />
        </form>
    )
}

export default TransportForm;