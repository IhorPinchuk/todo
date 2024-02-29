import React from "react";
import WrapperFlex from "../common/WrapperFlex";
import LabelCheckbox from "./LabelCheckbox";
import InputCheckbox from "./InputCheckbox";

const CheckboxTask = ({ id, isActive, setState }) => {
  // console.log(id)
  const handleCheckboxChange = (id) => {
    // console.log(e.target.value);
    setState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.map(task => task.id === id ? {...task, isActive: !task.isActive} : task)
    }))
    
  };

  return (
    <WrapperFlex>
      <InputCheckbox
        type="checkbox"
        name="checkboxTask"
        checked={!isActive}
        onChange={() => handleCheckboxChange(id)}
      />
      <LabelCheckbox>Done</LabelCheckbox>
    </WrapperFlex>
  );
};

export default CheckboxTask;
