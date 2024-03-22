import { useEffect, useState } from "react";

import Title from "../title/Title";
import SectionStyled from "../common/SectionStyled";
import ContainerStyled from "../common/ContainerStyled";
import NumberToDo from "../numberToDo/NumberToDo";
import StatusSelect from "../statusSelect/StatusSelect";
import WrapperFlex from "../common/WrapperFlex";
import InputFilter from "../inputFilter/InputFilter";
import numberToDoText from "../numberToDo/numberToDoText";
import { useFetch } from "../../hooks/useFetch";
import LoaderThreeCircles from "../loaders/loaderThreeCircles/LoaderThreeCircles";
import Modal from "../modals/modal/Modal";
import ModalAddEditTask from "../modals/modalAddEditTask/ModalAddEditTask";
import Btn from "../common/Btn";
import todoListDraw from "../toDoList/todoListDraw";

const ToDo = () => {
  const [state, setState] = useState({
    tasks: [],
    filterSelectedOption: "all",
    filter: "",
  });

  const { data: todos, isLoading, error, fetchData } = useFetch();
  const [isOpenModalAddTask, setIsOpenModalAddTask] = useState(false);

  useEffect(() => {
    if (!todos) {
      fetchData("todos");
    }
  }, [fetchData, todos]);

  useEffect(() => {
    if (todos) {
      setState((prevState) => ({
        ...prevState,
        tasks: todos,
      }));
    }
  }, [todos]);

  const { tasks, filterSelectedOption, filter } = state;
  let filteredSelectedTasks = tasks;
  let filteredTasks = filteredSelectedTasks;

  if (filterSelectedOption === "active") {
    filteredSelectedTasks = tasks.filter((task) => !task.checked);
  } else if (filterSelectedOption === "completed") {
    filteredSelectedTasks = tasks.filter((task) => task.checked);
  }

  if (filter) {
    filteredTasks = filteredSelectedTasks.filter((task) =>
      task.title.toLowerCase().includes(filter.toLowerCase())
    );
  } else {
    filteredTasks = filteredSelectedTasks;
  }

  const handleToogleModalAddTask = () => {
    setIsOpenModalAddTask((prevIsOpenModalAddTask) => !prevIsOpenModalAddTask);
  };
  console.log(tasks);

  return (
    <>
      <SectionStyled>
        <ContainerStyled>
          <Title>TodO List</Title>
          <Btn
            $marginLeftAuto
            $marginRightAuto
            $marginBottom
            type="button"
            name="addTask"
            onClick={handleToogleModalAddTask}
          >
            Add task
          </Btn>
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
            todoListDraw(error, filteredTasks, setState)
          )}
        </ContainerStyled>
      </SectionStyled>
      <Modal
        isOpen={isOpenModalAddTask}
        setIsOpen={setIsOpenModalAddTask}
        children={
          <ModalAddEditTask
            setState={setState}
            setIsOpenModalAddTask={setIsOpenModalAddTask}
          />
        }
      />
    </>
  );
};

export default ToDo;
