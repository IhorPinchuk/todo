import React from "react";
import WrapperFlex from "../common/WrapperFlex";
import LabelCheckbox from "./LabelCheckbox";
import InputCheckbox from "./InputCheckbox";

const CheckboxTask = () => {
const handleCheckboxChange = (e) => {
console.log(e.target.checked)
}

  return (
    <WrapperFlex>
      <InputCheckbox type="checkbox" name="checkboxTask" onChange={handleCheckboxChange} />
      <LabelCheckbox>Done</LabelCheckbox>
    </WrapperFlex>
  );
};

export default CheckboxTask;
