import React from "react";
import { formData } from "./FormData";
import getValidationSchema, { createYupSchema } from "./YupSchemaCreator";
import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import TextError from "../TextError";
const Formm = () => {
  const initialValues = {};
  formData.forEach((item) => {
    initialValues[item.id] = item.value || "";
  });
  const onSubmit = (values) => {
    console.log("submit", values);
  };
  const yepSchema = formData.reduce(createYupSchema, {});
  // const yepSchema = getValidationSchema(formData);

  const validateSchema = yup.object().shape(yepSchema);
  console.log("validation schema", validateSchema);
  const dropdowndata = [
    { key: "1", values: "select an option" },
    { key: "2", values: "moiz" },
    { key: "3", values: "moin" },
  ];
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validateSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          console.log("formik", formik);
          return (
            <Form>
              {formData.map((item, index) => {
                console.log(formik.errors[item.id]);
                return (
                  <>
                    {item.type === "select" ? (
                      <>
                        <label htmlFor={item.id}>{item.label}</label>
                        <Field
                          as={item.type}
                          key={index}
                          label={item.label}
                          name={item.id}
                          placeholder={item.placeholder}
                          value={formik.values[item.id]}
                        >
                          {dropdowndata.map((data) => {
                            return (
                              <option name={item.id} value={data.key}>
                                {data.values}
                              </option>
                            );
                          })}
                        </Field>
                        <ErrorMessage
                          name={item.id}
                          component={TextError}
                        ></ErrorMessage>{" "}
                      </>
                    ) : (
                      <>
                        {" "}
                        <label htmlFor={item.id}>{item.label}</label>
                        <Field
                          type={item.type}
                          key={index}
                          label={item.label}
                          name={item.id}
                          placeholder={item.placeholder}
                          value={formik.values[item.id]}
                        />
                        <ErrorMessage
                          name={item.id}
                          component={TextError}
                        ></ErrorMessage>
                      </>
                    )}
                  </>
                );
              })}
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Formm;
