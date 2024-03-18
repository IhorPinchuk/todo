import Li from "../common/Li";
import Text from "../common/Text";
import Btn from "../common/Btn";
import WrapperText from "../common/WrapperText";
import CheckboxTask from "../checkboxTask/CheckboxTask";

const ToDoListItem = ({ id, title, description, checked, setState }) => {
  const deleteTask = (id) => {
    setState((prevState) => {
      const filteredList = prevState.tasks.filter((task) => task.id !== id);
      return { ...prevState, tasks: filteredList };
    });
  };

  return (
    <Li>
      <WrapperText>
        <Text $lineThrough={!checked}>{title}</Text>
        <Text $lineThrough={!checked}>{description}</Text>
      </WrapperText>
      <CheckboxTask id={id} checked={checked} setState={setState} />
      <Btn onClick={() => deleteTask(id)}>Delete task</Btn>
    </Li>
  );
};

export default ToDoListItem;
