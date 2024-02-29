import React, { useState } from "react";
import Select from "../common/Select";
import Option from "../common/Option";
import {statusOptions} from "./statusOptions";

const StatusSelect = () => {
const [selectedOption, setSelectedOption] = useState("");
console.log(selectedOption)
const handleOptionChange = (e) => {
    setSelectedOption(e.target.value)
}

  return (
    <Select value={selectedOption}  onChange={handleOptionChange}>
      {statusOptions.map((option) => (
        <Option key={option.value} value={option.value}>{option.label}</Option>
      ))}
    </Select>
  );
};

export default StatusSelect;
