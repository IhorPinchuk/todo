import Ul from "../common/Ul";
import ToDoListItem from "./ToDoListItem";

const ToDoList = ({ tasksArray, setState }) => {
  return (
    <Ul>
      {tasksArray.map((task) => (
        <ToDoListItem key={task.id} task={task} setState={setState} />
      ))}
    </Ul>
  );
};

export default ToDoList;
