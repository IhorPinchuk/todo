import React from "react";
import {ErrorText} from "./Error.styled"

const ErrorMessage = ({ error, ...props }) => {
  return <ErrorText {...props}>Something went wrong! {error}</ErrorText>;
};

export default ErrorMessage;
