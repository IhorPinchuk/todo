import React from "react";

import { OptionFilter, SelectFilter } from "./StatusSelectFilter.styled";
import { statusOptions } from "./statusOptions";

const StatusSelectFilter = ({ filterSelectedOption, setFilterSelectedOption }) => {
  const handleOptionChange = (e) => {
    setFilterSelectedOption( e.target.value);
  };

  return (
    <SelectFilter
      value={filterSelectedOption}
      onChange={handleOptionChange}
    >
      {statusOptions.map((option) => (
        <OptionFilter key={option.value} value={option.value}>
          {option.label}
        </OptionFilter>
      ))}
    </SelectFilter>
  );
};

export default StatusSelectFilter;
