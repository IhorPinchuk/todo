import React from "react";
import { ErrorText } from "./Error.styled";


const ErrorTitleInputNewTask = ({ typeError, minLength, maxLength }) => {
  switch (typeError) {
    case "required":
      return <ErrorText>This field is required.</ErrorText>;
    case "minLength":
      return <ErrorText>Minimum number of characters is {minLength}</ErrorText>;
    case "maxLength":
      return <ErrorText>Maximum number of characters is {maxLength}</ErrorText>;
    default:
      <ErrorText>An unknown error occurred</ErrorText>;
  }
};

export default ErrorTitleInputNewTask;
