import React from "react";
import InputField from "../../Common/InputField/inputField";
import TextAreaField from "../../Common/TextAreaField/textAreaField";

const SharedForm = ({ handleChange, handleImagesChange, data, model }) => {
    return (
        <form>
            <InputField
                name="name"
                id="Name"
                value={data.name}
                handleChange={handleChange}
            />
            <InputField
                name="address"
                id="Address"
                value={data.address}
                handleChange={handleChange}
            />
            <InputField
                name="city"
                id="City"
                value={data.city}
                handleChange={handleChange}
            />
            <InputField
                name="types"
                id="Type"
                value={data.types}
                handleChange={handleChange}
            />
            <InputField
                name="interests"
                id="Interests"
                value={data.interests}
                handleChange={handleChange}
            />
            <InputField
                name="price"
                id="Price"
                value={data.price}
                handleChange={handleChange}
            />

            {model === "restaurants" ? (
                <div>
                    <InputField
                        name="discount"
                        id="Discount"
                        value={data.discount}
                        handleChange={handleChange}
                    />
                    <InputField
                        name="food_types"
                        id="Food type"
                        value={data.food_types}
                        handleChange={handleChange}
                    />
                </div>
            ) : null}

            <InputField
                name="phone_numbers"
                id="Phone Number"
                value={data.phone_numbers}
                handleChange={handleChange}
            />
            <InputField
                name="contacts"
                id="Contacts"
                value={data.contacts}
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

export default SharedForm;