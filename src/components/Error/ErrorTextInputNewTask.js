import React from "react";
import ErrorText from "../common/ErrorText";

const ErrorTextInputNewTask = ({ typeError }) => {
  switch (typeError) {
    case "required":
      return (
        <ErrorText>
          Please enter your task. Minimum number of characters is 2, maximum is
          10
        </ErrorText>
      );
    case "minLength":
      return <ErrorText>Minimum number of characters is 2</ErrorText>;
    case "maxLength":
      return <ErrorText>Maximum number of characters is 10</ErrorText>;
    default:
      <ErrorText>An unknown error occurred</ErrorText>;
  }
};

export default ErrorTextInputNewTask;
