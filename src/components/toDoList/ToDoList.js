import Ul from "../common/Ul";
import ToDoListItem from "./ToDoListItem";

const ToDoList = ({ tasksArray, setState }) => {
  return (
    <Ul>
      {tasksArray.map(({ id, title, description, checked }) => (
        <ToDoListItem
          key={id}
          id={id}
          title={title}
          description={description}
          checked={checked}
          setState={setState}
        />
      ))}
    </Ul>
  );
};

export default ToDoList;
