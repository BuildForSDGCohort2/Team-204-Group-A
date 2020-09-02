import React from "react";

const Input = (props) => {
  switch (props.type) {
    case "text":
      return (
        <div className="form__group">
          <label htmlFor={props.attrs.id} className="form__label">
            {props.label}
          </label>
          <input
            type="text"
            {...props.attrs}
            className="form__input"
            value={props.value}
          />
        </div>
      );
    case "email":
      return (
        <div className="form__group">
          <label htmlFor={props.attrs.id} className="form__label">
            {props.label}
          </label>
          <input
            type="email"
            {...props.attrs}
            className="form__input"
            value={props.value}
          />
        </div>
      );
    case "password":
      return (
        <div className="form__group">
          <label htmlFor={props.attrs.id} className="form__label">
            {props.label}
          </label>
          <input
            type="password"
            {...props.attrs}
            className="form__input"
            value={props.value}
          />
        </div>
      );

    default:
      return <input type="text" />;
  }
};

export default Input;
