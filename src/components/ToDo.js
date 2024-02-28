import { useState } from "react";

import Title from "./Title";
import ToDoList from "./toDoList/ToDoList";
import { tasksArrayInit } from "./tasksArrayInit/tasksArrayInit";
import SectionStyled from "./common/SectionStyled";
import ContainerStyled from "./common/ContainerStyled";
import NumberToDo from "./NumberToDo";
import FormAddTask from "./FormAddTask";


const ToDo = () => {
  const [state, setState] = useState({
    tasks: tasksArrayInit,
    filter: "",
  });
  
  return (
    <SectionStyled>
      <ContainerStyled>
        <Title>TodO List</Title>
        <FormAddTask setState={setState} />
        <NumberToDo>{state.tasks.length}</NumberToDo>
        <ToDoList tasksArray={state.tasks} state={state} setState={setState} />
      </ContainerStyled>
    </SectionStyled>
  );
};

export default ToDo;
