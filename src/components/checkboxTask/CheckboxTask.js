import React from "react";
import WrapperFlex from "../common/WrapperFlex";
import LabelCheckbox from "./LabelCheckbox";
import InputCheckbox from "./InputCheckbox";

const CheckboxTask = ({ id, checked, setState }) => {
  const handleCheckboxChange = (id) => {
    setState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      ),
    }));
  };

  return (
    <WrapperFlex>
      <InputCheckbox
        type="checkbox"
        name="checkboxTask"
        checked={checked}
        onChange={() => handleCheckboxChange(id)}
      />
      <LabelCheckbox>Done</LabelCheckbox>
    </WrapperFlex>
  );
};

export default CheckboxTask;
