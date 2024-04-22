import { useEffect, useState } from "react";

import SectionStyled from "../common/SectionStyled";
import ContainerStyled from "../common/ContainerStyled";
import { NumberToDo } from "../numberToDo/NumberToDo.styled";
import StatusSelectFilter from "../statusSelectFilter/StatusSelectFilter";
import NameFilter from "../nameFilter/NameFilter";
import numberToDoText from "../numberToDo/numberToDoText";
import { useFetch } from "../../hooks/useFetch";
import LoaderThreeCircles from "../loaders/loaderThreeCircles/LoaderThreeCircles";
import Modal from "../modals/modal/Modal";
import ModalAddEditTask from "../modals/modalAddEditTask/ModalAddEditTask";
import todoListDraw from "../toDoList/todoListDraw";
import {
  BtnTodo,
  TitleTodo,
  WrapperLabelInputTodo,
  WrapperSelectFilter,
} from "./ToDo.styled";
import { useNavigate } from "react-router-dom";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [filterSelectedOption, setFilterSelectedOption] = useState("all");
  const [filter, setFilter] = useState("");

  const { data: todos, isLoading, error, fetchData } = useFetch();
  const [isOpenModalAddTask, setIsOpenModalAddTask] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!todos) {
      fetchData("todos");
    }
  }, [todos, fetchData, tasks]);

  useEffect(() => {
    if (todos) {
      setTasks((prevTasks) => [...todos]);
    }
  }, [todos]);

  useEffect(() => {
    if (error) {
      navigate("/error-page", { state: { error: error }, replace: true });
    }
  }, [navigate, error]);

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

  return (
    <>
      <SectionStyled>
        <ContainerStyled>
          <TitleTodo>TodO List</TitleTodo>
          <BtnTodo
            type="button"
            name="addTask"
            onClick={handleToogleModalAddTask}
          >
            Add task
          </BtnTodo>

          <WrapperSelectFilter>
            <StatusSelectFilter
              filterSelectedOption={filterSelectedOption}
              setFilterSelectedOption={setFilterSelectedOption}
            />
          </WrapperSelectFilter>
          <WrapperLabelInputTodo>
            <NameFilter filter={filter} setFilter={setFilter} />
          </WrapperLabelInputTodo>
          <NumberToDo>
            {numberToDoText(filteredTasks, filterSelectedOption)}
          </NumberToDo>
          {isLoading ? (
            <LoaderThreeCircles isLoading={isLoading} />
          ) : (
            todoListDraw(filteredTasks, setTasks)
          )}
        </ContainerStyled>
      </SectionStyled>
      <Modal
        isOpen={isOpenModalAddTask}
        setIsOpen={setIsOpenModalAddTask}
        children={
          <ModalAddEditTask
            setTasks={setTasks}
            setIsOpenModalAddTask={setIsOpenModalAddTask}
          />
        }
      />
    </>
  );
};

export default ToDo;
