import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

const TextArea = (props) => {
  const { name, label, ...rest } = props;

  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" id={name} name={name} {...rest}></Field>
      <ErrorMessage name={name} component={TextError}></ErrorMessage>
      {/* <TextError>
        <ErrorMessage name={name}></ErrorMessage>
      </TextError> */}
    </div>
  );
};

export default TextArea;
