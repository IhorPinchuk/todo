import { useState } from "react";

import Title from "./Title";
import ToDoList from "./toDoList/ToDoList";
import { tasksArrayInit } from "./tasksArrayInit/tasksArrayInit";
import SectionStyled from "./common/SectionStyled";
import ContainerStyled from "./common/ContainerStyled";
import NumberToDo from "./numberToDo/NumberToDo";
import FormAddTask from "./FormAddTask";
import StatusSelect from "./statusSelect/StatusSelect";
import WrapperFlex from "./common/WrapperFlex";
import InputFilter from "./InputFilter";
import numberToDoText from "./numberToDo/numberToDoText";

const ToDo = () => {
  const [state, setState] = useState({
    tasks: tasksArrayInit,
    filterSelectedOption: "all",
    filter: "",
  });

  const { tasks, filterSelectedOption, filter } = state;
  let filteredSelectedTasks = tasks;
  let filteredTasks = filteredSelectedTasks;

  if (filterSelectedOption === "active") {
    filteredSelectedTasks = tasks.filter((task) => task.isActive);
  } else if (filterSelectedOption === "completed") {
    filteredSelectedTasks = tasks.filter((task) => !task.isActive);
  }

  if (filter) {
    filteredTasks = filteredSelectedTasks.filter((task) =>
      task.name.toLowerCase().includes(filter.toLowerCase())
    );
  } else {
    filteredTasks = filteredSelectedTasks;
  }
  // console.log(filteredTasks)
  console.log(state)

  return (
    <SectionStyled>
      <ContainerStyled>
        <Title>TodO List</Title>
        <FormAddTask setState={setState} />
        <WrapperFlex $marginBottom>
          <StatusSelect state={state} setState={setState} />
        </WrapperFlex>
        <WrapperFlex $marginBottom>
          <InputFilter state = {state} setState = {setState} />
        </WrapperFlex>
        <NumberToDo>
          {numberToDoText(filteredTasks, state.filterSelectedOption)}
        </NumberToDo>
        <ToDoList tasksArray={filteredTasks} setState={setState} />
      </ContainerStyled>
    </SectionStyled>
  );
};

export default ToDo;
