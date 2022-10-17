import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const initialValues = {
  name: "moiz",
  email: "",
  channel: "",
};
//this automaticcly takes values
// const onSubmit = (values) => {
//   console.log("On Submit f", values);
// };

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
});
const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log("On Submit f", values);
    },
    // validate,
    validationSchema,
  });
  // console.log("Form visited ", formik.touched);
  // console.log("Form values ", formik.values);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name"> Name</label>
          <input
            type="text"
            name="name"
            id="name"
            // {...formik.getFieldProps("name")}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
          ></input>
          {formik.errors.name && formik.touched.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="email"> Email</label>
          <input
            type="text"
            name="email"
            id="email"
            // {...formik.getFieldProps("email")} //this is replacement of below three
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          ></input>
          {formik.errors.name && formik.touched.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="channel"> Channel</label>
          <input
            type="text"
            name="channel"
            id="channel"
            // {...formik.getFieldProps("channel")}
            onBlur={formik.handleBlur} //it check wether field is visited or not and store in formik.touched
            onChange={formik.handleChange}
            value={formik.values.channel}
          ></input>
          {formik.errors.name && formik.touched.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null}
        </div>
        <button type="submit">Submit</button>{" "}
      </form>
    </div>
  );
};

export default YoutubeForm;
