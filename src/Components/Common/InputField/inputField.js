import React from "react";

const InputField = ({
  name,
  id,
  type = "text",
  handleChange,
  placeholder,
  value = "",
  ...props
}) => (
  <div className="uk-margin">
    <label className="uk-form-label uk-text-capitalize">
      {id}:
    </label>
    <div className="uk-form-controls">
      <input
        onChange={handleChange}
        name={name}
        className="uk-input"
        id={name}
        type={type}
        value={value}
        placeholder={placeholder}
        {...props}
      />
    </div>
  </div>
);

export default InputField;