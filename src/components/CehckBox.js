import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

const CheckBox = (props) => {
  const { label, options, name, ...rest } = props;
  return (
    <div className="form-control">
      <label>{name}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          //destructured filed form filed
          console.log(field);
          return options.map((data) => {
            return (
              <>
                <input //it will tkae name form fild
                  type="checkbox"
                  id={data.value}
                  {...field}
                  value={data.value}
                  checked={field.value.includes(data.value)}
                />
                <label htmlFor={data.value}>{data.key}</label>
              </>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError}></ErrorMessage>
    </div>
  );
};

export default CheckBox;
