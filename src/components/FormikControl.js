import React from "react";
import CheckBox from "./CehckBox";
import DatePiker from "./DatePiker";
import Input from "./Input";
import RadioButtons from "./RadioButtons";
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
    case "radio":
      return <RadioButtons {...rest}></RadioButtons>;
    case "checkbox":
      return <CheckBox {...rest}></CheckBox>;
    case "DatePicker":
      return <DatePiker {...rest}></DatePiker>;
    default:
      return null;
  }
};

export default FormikControl;
