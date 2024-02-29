import Ul from "../common/Ul";
import ToDoListItem from "./ToDoListItem";

const ToDoList = ({ tasksArray, setState }) => {
  return (
    <Ul>
      {tasksArray.map(({ id, name, isActive }) => (
        <ToDoListItem
          key={id}
          id={id}
          name={name}
          isActive={isActive}          
          setState={setState}
        />
      ))}
    </Ul>
  );
};

export default ToDoList;
