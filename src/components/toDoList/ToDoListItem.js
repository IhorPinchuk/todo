import Li from "../common/Li";
import Text from "../common/Text";
import Btn from "../common/Btn";
import WrapperText from "../common/WrapperText";
import CheckboxTask from "../checkboxTask/CheckboxTask";

const ToDoListItem = ({ id, name, isActive, setState }) => {
  const deleteTask = (id) => {    
    setState((prevState) => {
      const filteredList = prevState.tasks.filter((task) => task.id !== id);
      return { ...prevState, tasks: filteredList }});
  };

  return (
    <Li>
      <WrapperText>
        <Text $lineThrough={isActive}>{name}</Text>
      </WrapperText>
      <CheckboxTask id={id} isActive={isActive} setState={setState} />
      <Btn onClick={() => deleteTask(id)}>Delete task</Btn>
    </Li>
  );
};

export default ToDoListItem;
