import React from "react";

import ToDoList from "./ToDoList";
import { ErrorText } from "../Error/Error.styled";

const todoListDraw = ( filteredTasks, setTasks) => {
  if (filteredTasks.length === 0) {
    return (
      <ErrorText $textAlignCenter>You don't have any tasks yet!</ErrorText>
    );
  } else {
    return <ToDoList tasksArray={filteredTasks} setTasks={setTasks} />;
  }
};

export default todoListDraw;
