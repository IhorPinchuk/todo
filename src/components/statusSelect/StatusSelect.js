import React from "react";
import Select from "../common/Select";
import Option from "../common/Option";
import {statusOptions} from "./statusOptions";

const StatusSelect = ({state, setState}) => {

const handleOptionChange = (e) => {
  setState((prevState) => ({
    ...prevState,
    filterSelectedOption: e.target.value,
  })) 
}

  return (
    <Select value={state.filterSelectedOption}  onChange={handleOptionChange}>
      {statusOptions.map((option) => (
        <Option key={option.value} value={option.value}>{option.label}</Option>
      ))}
    </Select>
  );
};

export default StatusSelect;
