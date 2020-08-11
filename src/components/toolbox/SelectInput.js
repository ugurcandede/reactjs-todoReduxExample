import React from "react";
import { Label } from "reactstrap";

const SelectInput = ({
  name,
  label,
  onChange,
  defaultOption,
  value,
  error,
  options,
}) => {
  return (
    <div className="form-group">
      <Label htmlFor={name}>{label}</Label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
      >
        <option value="">{defaultOption}</option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default SelectInput;