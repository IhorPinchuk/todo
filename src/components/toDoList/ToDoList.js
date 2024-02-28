import Ul from "../common/Ul";
import ToDoListItem from "./ToDoListItem";

const ToDoList = ({ tasksArray, state, setState }) => {
  return (
    <Ul>
      {tasksArray.map(({ id, name }) => (
        <ToDoListItem
          key={id}
          id={id}
          name={name}
          state={state}
          setState={setState}
        />
      ))}
    </Ul>
  );
};

export default ToDoList;
