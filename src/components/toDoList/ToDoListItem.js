import Li from "../common/Li";
import Text from "../common/Text";
import Btn from "../common/Btn";
import WrapperText from "../common/WrapperText";
import CheckboxTask from "../checkboxTask/CheckboxTask";

const ToDoListItem = ({ id, name, state, setState }) => {
  const deleteTask = (id) => {
    const filteredList = state.tasks.filter((task) => task.id !== id);
    setState((prevState) => ({ ...prevState, tasks: filteredList }));
  };

  return (
    <Li>
      <WrapperText>
        <Text>{name}</Text>
      </WrapperText>
      <CheckboxTask />
      <Btn onClick={() => deleteTask(id)}>Delete task</Btn>
    </Li>
  );
};

export default ToDoListItem;
