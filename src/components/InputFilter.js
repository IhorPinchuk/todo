import Label from "./common/Label";
import Input from "./common/Input";
import { useEffect, useState } from "react";

const InputFilter = ({ state, setState }) => {
  const [filterInput, setFilterInput] = useState("");

  useEffect(() => {
    if (state.filter !== filterInput) {
      const timeoutId = setTimeout(() => {
        setState((prevState) => ({
          ...prevState,
          filter: filterInput,
        }));
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [filterInput, state.filter, setState]);

  const handleChange = (e) => {
    setFilterInput(e.target.value);
  };

  return (
    <Label>
      <Input
        type="text"
        name="filteredTasks"
        value={filterInput}
        placeholder="Enter filter name task"
        onChange={handleChange}
      />
    </Label>
  );
};

export default InputFilter;
