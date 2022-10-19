import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
const initialValues = {
  email: "",
  description: "",
  selectoption: "",
  radiovalues: "",
};
const dropdowndata = [
  { key: "1", values: "select an option" },
  { key: "2", values: "moiz" },
  { key: "3", values: "moin" },
];
const radiobuttondata = [
  { key: "Option 1", value: "option1value" },
  { key: "Option 2", value: "option2value" },
  { key: "Option 3", value: "option3value" },
];
const onSubmit = (values) => {
  console.log(values);
};
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid Email Formate").required("Requried!"),
  description: Yup.string().required("Requried!"),
  radiovalues: Yup.string().required("Requried!"),
});
const FormikContainer = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="Input"
              type="email"
              label="Email"
              name="email"
            ></FormikControl>
            <FormikControl
              control="Textarea"
              type="textarea"
              label="Description"
              name="description"
            ></FormikControl>
            <FormikControl
              control="Select"
              label="Select an Option"
              name="selectoption"
              option={dropdowndata}
            ></FormikControl>
            <FormikControl
              control="radio"
              label="CheckAnybutton"
              name="radiovalues"
              options={radiobuttondata}
            ></FormikControl>
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainer;
