import React from "react";
import { Label } from "reactstrap";
import { useSelector } from "react-redux";

const SelectInput = ({
  name,
  label,
  onChange,
  defaultOption,
  value,
  error,
  options,
}) => {
  const theme = useSelector((state) => state.themeReducer);

  return (
    <div className="form-group">
      <Label htmlFor={name}>{label}</Label>
      <select
        style={{ backgroundColor: theme.gray, color: theme.primaryTextColor }}
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
      >
        <option
          style={{ backgroundColor: theme.gray, color: theme.primaryTextColor }}
          value=""
        >
          {defaultOption}
        </option>
        {options.map((option) => {
          return (
            <option
              style={{
                backgroundColor: theme.gray,
                color: theme.primaryTextColor,
              }}
              key={option.value}
              value={option.value}
            >
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
