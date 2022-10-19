import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
const initialValues = {
  name: "moiz",
  email: "",
  channel: "",
  comments: "",
  adress: {
    city: "",
    country: "",
  },
  Phone: ["", ""],
  phNumbers: [""],
};
const savedDataAPI = {
  name: "moiz",
  email: "moizrauf03@gmail.com",
  channel: "MRA",
  comments: "ADOPT ME",
  adress: {
    city: "KARACHI",
    country: "CANDA",
  },
  Phone: ["342", "342"],
  phNumbers: ["420"],
};
//this automaticcly takes values
// const onSubmit = (values) => {
//   console.log("On Submit f", values);
// };
const onSubmit = (values, formsubmitting) => {
  console.log("On Submit f", values);
  formsubmitting.setSubmitting(false);
  formsubmitting.resetForm();
  console.log(formsubmitting);
};
//validation through formik
// const validate = (values) => {
//   const errors = {};
//   if (!values.name) {
//     errors.name = "Requried";
//   }
//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }
//   if (!values.channel) {
//     errors.channel = "Requried";
//   }
//   return errors;
// };

//Validation through YUP
const validationSchema = Yup.object({
  name: Yup.string().required("Requried!"),
  email: Yup.string().email("Invalid Email Formate").required("Requried!"),
  channel: Yup.string().required("Requried!"),
  comments: Yup.string().max(255).required("Requried!"),
  adress: Yup.object().shape({
    city: Yup.string().required("Requried!"),
    country: Yup.string().required("Requried!"),
  }),
});
const NewYoutubeForm = () => {
  //   const formik = useFormik({
  //     initialValues,
  //     onSubmit,
  //     // validate,
  //     validationSchema,
  //   });
  // console.log("Form visited ", formik.touched);
  // console.log("Form values ", formik.values);
  const [savedData, setsavedData] = useState(null);
  console.log("CHECKING STATE DATA", savedData);
  return (
    <Formik
      initialValues={savedData || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="name"> Name</label>
              <Field
                type="text"
                name="name"
                id="name"
                // {...formik.getFieldProps("name")}
                // onBlur={formik.handleBlur}
                // onChange={formik.handleChange}
                // value={formik.values.name}
              ></Field>

              <ErrorMessage name="name">
                {/* to apply class and wrap the msg in div */}
                {/* we can also make a different componet then pass in ErrorMessage as prop */}
                {(error) => <div className="error">{error}</div>}
              </ErrorMessage>
              {/* {formik.errors.name && formik.touched.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null} */}
            </div>
            <div className="form-control">
              <label htmlFor="email"> Email</label>
              <Field
                type="text"
                name="email"
                id="email"
                // {...formik.getFieldProps("email")} //this is replacement of below three
                // onBlur={formik.handleBlur}
                // onChange={formik.handleChange}
                // value={formik.values.email}
              ></Field>
              <ErrorMessage name="email">
                {(error) => <div className="error">{error}</div>}
              </ErrorMessage>
              {/* {formik.errors.name && formik.touched.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null} */}
            </div>
            <div className="form-control">
              <label htmlFor="channel"> Channel</label>
              <Field
                type="text"
                name="channel"
                id="channel"
                // {...formik.getFieldProps("channel")}
                // onBlur={formik.handleBlur} //it check wether field is visited or not and store in formik.touched
                // onChange={formik.handleChange}
                // value={formik.values.channel}
              ></Field>
              <ErrorMessage name="channel">
                {(error) => <div className="error">{error}</div>}
              </ErrorMessage>
              {/* {formik.errors.name && formik.touched.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null} */}
            </div>
            {/* <div className="form-control">
          <label htmlFor="adress"> Adress</label>
          <Field type="text" name="adress" id="adress"></Field>
          <ErrorMessage name="adress">
            {(error) => <div className="error">{error}</div>}
          </ErrorMessage>
        </div> */}
            <div className="form-control">
              <label htmlFor="city"> City</label>
              <Field type="text" name="adress.city" id="city"></Field>
              <ErrorMessage name="adress.city">
                {(error) => <div className="error">{error}</div>}
              </ErrorMessage>
            </div>
            <div className="form-control">
              <label htmlFor="country"> Country</label>
              <Field type="text" name="adress.country" id="country"></Field>
              <ErrorMessage name="adress.country">
                {(error) => <div className="error">{error}</div>}
              </ErrorMessage>
            </div>
            <div className="form-control">
              <label htmlFor="phone">Phone No</label>
              <Field // field component takes as prop to decide what elemt to render
                type="text"
                name="Phone[0]"
                id="phone"
              ></Field>

              {/* <ErrorMessage name="Phone[0]">
            {(error) => <div className="error">{error}</div>}
          </ErrorMessage> */}
            </div>
            <div className="form-control">
              <label htmlFor="Phone2">Phone No2</label>
              <Field // field component takes as prop to decide what elemt to render
                type="text"
                name="Phone[1]"
                id="phone2"
              ></Field>

              {/* <ErrorMessage name="phone2">
            {(error) => <div className="error">{error}</div>}
          </ErrorMessage> */}
            </div>
            {/* Dynamically Adding phone Numbers */}
            <div className="form-control">
              <label htmlFor="phNumbers">Phone Noss</label>
              <FieldArray name="phNumbers">
                {(fieldprop) => {
                  const { push, remove, form } = fieldprop;
                  const { values } = form;
                  const { phNumbers } = values;

                  return (
                    <div>
                      {phNumbers.map((phnumber, index) => (
                        <div key={index}>
                          <Field name={`phNumbers[${index}]`} />;
                          <button
                            type="button"
                            onClick={() => {
                              push("");
                            }}
                          >
                            +
                          </button>
                          {index > 0 && (
                            <button
                              type="button"
                              onClick={() => {
                                remove(index);
                              }}
                            >
                              -
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
            </div>
            <div className="form-control">
              <label htmlFor="comments">Comments</label>
              <Field // field component takes as prop to decide what elemt to render
                as="Textarea"
                type="text"
                name="comments"
                id="comments"
              ></Field>

              <ErrorMessage name="comments">
                {(error) => <div className="error">{error}</div>}
              </ErrorMessage>
            </div>
            <button type="reset">ResetForm</button>
            <button
              type="submit"
              onClick={() => {
                setsavedData(savedDataAPI);
              }}
            >
              LoadSavedData
            </button>
            <button
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Submit
            </button>{" "}
          </Form>
        );
      }}
    </Formik>
  );
};

export default NewYoutubeForm;
