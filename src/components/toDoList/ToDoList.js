import { UlTodoList } from "./ToDoList.styled";
import ToDoListItem from "./toDoListItem/ToDoListItem";

const ToDoList = ({ tasksArray, setTasks }) => {
  return (
    <UlTodoList>
      {tasksArray.map((task, index) => (
        <ToDoListItem key={task.id} task={task} index={index} setTasks={setTasks} />
      ))}
    </UlTodoList>
  );
};

export default ToDoList;
