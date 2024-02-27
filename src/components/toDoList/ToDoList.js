import Ul from "../common/Ul";
import ToDoListItem from "./ToDoListItem";

const ToDoList = ({ arrayToDo, deleteToDo }) => {
  return (
    <Ul>
      {arrayToDo.map(({ id, name }) => (
        <ToDoListItem key={id} id ={id} name={name} deleteToDo={deleteToDo} />  
      ))}
    </Ul>
  );
};

export default ToDoList;
