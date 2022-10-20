import { ErrorMessage, Field } from "formik";
import React from "react";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextError from "./TextError";

const DatePiker = (props) => {
  const { name, label, ...rest } = props;
  return (
    <div className="form-control">
      <label>{name}</label>
      <Field name={name} {...rest}>
        {({ field, form }) => {
          console.log("datepiker", form);
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => {
                setFieldValue(name, val);
              }}
            ></DateView>
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError}></ErrorMessage>
    </div>
  );
};

export default DatePiker;
