import { useEffect, useState } from "react";

import Title from "../title/Title";
import ToDoList from "../toDoList/ToDoList";
import SectionStyled from "../common/SectionStyled";
import ContainerStyled from "../common/ContainerStyled";
import NumberToDo from "../numberToDo/NumberToDo";
import FormAddTask from "../formAddTask/FormAddTask";
import StatusSelect from "../statusSelect/StatusSelect";
import WrapperFlex from "../common/WrapperFlex";
import InputFilter from "../inputFilter/InputFilter";
import numberToDoText from "../numberToDo/numberToDoText";
import { useFetch } from "../../hooks/useFetch";
import LoaderThreeCircles from "../loaders/LoaderThreeCircles";

const ToDo = () => {
  const [state, setState] = useState({
    tasks: [],
    filterSelectedOption: "all",
    filter: "",
  });

  const { data: todos, isLoading, error } = useFetch("todos");

  useEffect(() => {
    if (todos) {
      setState((prevState) => ({
        ...prevState,
        tasks: todos,
      }));
    }
  }, [todos]);

  if (error) {
    return <p>Something went wrong! {error}</p>;
  }

  const { tasks, filterSelectedOption, filter } = state;
  let filteredSelectedTasks = tasks;
  let filteredTasks = filteredSelectedTasks;

  if (filterSelectedOption === "active") {
    filteredSelectedTasks = tasks.filter((task) => task.checked);
  } else if (filterSelectedOption === "completed") {
    filteredSelectedTasks = tasks.filter((task) => !task.checked);
  }

  if (filter) {
    filteredTasks = filteredSelectedTasks.filter((task) =>
      task.title.toLowerCase().includes(filter.toLowerCase())
    );
  } else {
    filteredTasks = filteredSelectedTasks;
  }

  
  
  return (
    <SectionStyled>
      <ContainerStyled>
        <Title>TodO List</Title>
        <FormAddTask setState={setState} />
        <WrapperFlex $marginBottom>
          <StatusSelect state={state} setState={setState} />
        </WrapperFlex>
        <WrapperFlex $marginBottom>
          <InputFilter state={state} setState={setState} />
        </WrapperFlex>
        <NumberToDo>
          {numberToDoText(filteredTasks, state.filterSelectedOption)}
        </NumberToDo>
        {isLoading ? (
          <LoaderThreeCircles isLoading={isLoading} />
        ) : (
          <ToDoList tasksArray={filteredTasks} setState={setState} />
        )}
      </ContainerStyled>
    </SectionStyled>
  );
};

export default ToDo;
