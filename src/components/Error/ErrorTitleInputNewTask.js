import React from "react";
import ErrorText from "../common/ErrorText";

const ErrorTitleInputNewTask = ({ typeError, requiredText, maxLengthText }) => {
  switch (typeError) {
    case "required":
      return <ErrorText>{requiredText}</ErrorText>;
    case "minLength":
      return <ErrorText>Minimum number of characters is 2</ErrorText>;
    case "maxLength":
      return <ErrorText>{maxLengthText}</ErrorText>;
    default:
      <ErrorText>An unknown error occurred</ErrorText>;
  }
};

export default ErrorTitleInputNewTask;
