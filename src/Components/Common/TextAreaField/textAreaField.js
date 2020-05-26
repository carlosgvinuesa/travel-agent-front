import React from "react";

const TextAreaField = ({ name, handleChange, hint, value }) => (
  <div className="uk-margin uk-text-left">
    <label className="uk-form-label uk-text-capitalize uk-margin-left" htmlFor={name}>
      {name}:
    </label>
    <div className="uk-form-controls">
      <textarea
        onChange={handleChange}
        className="uk-textarea"
        name={name}
        id={name}
        cols="30"
        rows="5"
        value={value}
        placeholder={hint}
      ></textarea>
    </div>
  </div>
);

export default TextAreaField;