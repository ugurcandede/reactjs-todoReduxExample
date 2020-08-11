import React from "react";
import { Input, Label } from "reactstrap";

const TextInput = ({
  name,
  label,
  type,
  placeHolder,
  value,
  onChange,
  error,
}) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    < div className={wrapperClass} >
      <Label htmlFor={name}>{label}</Label>
      <div className="field">
        <Input
          type={type}
          name={name}
          className="form-control"
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
          maxLength={250}
        />
        {name === "todoDesc" ? <p> Max Character Limit: 250</p> : null}
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div >
  );
};

export default TextInput;
