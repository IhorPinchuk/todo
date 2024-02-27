import Input from "./common/Input";
import Label from "./common/Label";

const InputNewTask = ({ value, inputNewTaskChanch, handleKeyDown }) => {
  return (
    <Label>
      <Input
        type="text"
        name="newTask"
        value={value}
        placeholder="New task"
        onChange={inputNewTaskChanch}
        onKeyDown={handleKeyDown}
      />
    </Label>
  );
};

export default InputNewTask;
