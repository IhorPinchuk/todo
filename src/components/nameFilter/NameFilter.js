import { useEffect, useState } from "react";
import { InputNameFilter, LabelNameFilter } from "./NameFilter.styled";
import useDebounce from "../../hooks/useDebounce";

const NameFilter = ({ filter, setFilter }) => {
  const [filterInput, setFilterInput] = useState("");
  const debouncedFilter = useDebounce(filterInput, 1000);

  useEffect(() => {
    if (filter !== debouncedFilter.trim()) {
      setFilter(debouncedFilter);
    }
  }, [debouncedFilter, filter, setFilter]);

  const handleChange = (e) => {
    const { value } = e.target;
    setFilterInput(value);
  };

  return (
    <LabelNameFilter>
      <InputNameFilter
        type="text"
        name="filteredTasks"
        value={filterInput}
        placeholder="Enter filter name task"
        onChange={handleChange}
      />
    </LabelNameFilter>
  );
};

export default NameFilter;
