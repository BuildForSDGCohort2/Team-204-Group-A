import React from "react";
import Input from "./Input";

const Form = (props) => {
  const inputs = Object.entries(props.login).map((input) => (
    <Input
      type={input[1].type}
      attrs={input[1].attrs}
      key={input[0]}
      label={input[0]}
    />
  ));
  return (
    <form onSubmit={props.submit} className="form">
      <div className="form__group">
        <h3 className="form__title">{props.title}</h3>
      </div>

      {inputs}

      <div className="form__group">
        <button type="submit" className="form__btn">
          {props.use}
        </button>
      </div>
    </form>
  );
};

export default Form;
