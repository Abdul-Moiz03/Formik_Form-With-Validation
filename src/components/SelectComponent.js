import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

const SelectComponent = (props) => {
  const { name, label, option, ...rest } = props;

  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {option.map((data) => {
          return (
            <option name={data.values} value={data.key}>
              {data.values}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError}></ErrorMessage>
      {/* <TextError>
        <ErrorMessage name={name}></ErrorMessage>
      </TextError> */}
    </div>
  );
};
export default SelectComponent;
