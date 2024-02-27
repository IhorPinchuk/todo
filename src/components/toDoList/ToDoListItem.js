import Li from "../common/Li";
import Text from "../common/Text";
import Btn from "../common/Btn"
import WrapperText from "../common/WrapperText";

const ToDoListItem = ({ id, name, deleteToDo}) => {
  return (
    <Li>
      <WrapperText>
      <Text>{name}</Text>
      </WrapperText>
      <Btn onClick={() => deleteToDo(id)}>Delete To Do</Btn>      
    </Li>
  );
};

export default ToDoListItem;
