import React from "react";
import Input from "./Input";
import SelectComponent from "./SelectComponent";
import TextArea from "./TextArea";

const FormikControl = (props) => {
  const { control, ...rest } = props;

  switch (control) {
    case "Input":
      return <Input {...rest}></Input>;
    case "Textarea":
      return <TextArea {...rest}></TextArea>;
    case "Select":
      return <SelectComponent {...rest}></SelectComponent>;
    default:
      return null;
  }
};

export default FormikControl;