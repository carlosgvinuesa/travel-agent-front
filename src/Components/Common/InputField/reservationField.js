import React from "react";

const ReservationField = ({
    className,
    name,
    id,
    type = "text",
    handleChange,
    value = "",
    ...props
}) => (
        <div className={className}>
            <label className="uk-form-label uk-text-capitalize uk-margin-small-left">
                {id}
            </label>
            <input
                className="uk-input"
                onChange={handleChange}
                type={type}
                name={name}
                value={value}
                {...props}
            />
        </div>
    );

export default ReservationField;