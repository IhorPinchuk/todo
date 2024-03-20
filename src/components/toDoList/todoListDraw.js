import React from "react";
import ErrorMessage from "../Error/ErrorMessage";
import ErrorText from "../common/ErrorText";
import ToDoList from "./ToDoList";

const todoListDraw = (error, filteredTasks, setState) => {
  if (error) {
    return <ErrorMessage $textAlignCenter error={error} />;
  } else if (filteredTasks.length === 0) {
    return (
      <ErrorText $textAlignCenter>You don't have any tasks yet!</ErrorText>
    );
  } else {
    return <ToDoList tasksArray={filteredTasks} setState={setState} />;
  }
};

export default todoListDraw;
