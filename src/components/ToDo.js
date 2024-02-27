import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Btn from "./common/Btn";
import InputNewTask from "./InputNewTask";
import Title from "./Title";
import ToDoList from "./toDoList/ToDoList";
import { toDoArrayInit } from "./toDoArrayInit/toDoArrayInit";
import SectionStyled from "./common/SectionStyled";
import ContainerStyled from "./common/ContainerStyled";
import WrapperFlex from "./common/WrapperFlex";
import NumberToDo from "./NumberToDo";

const ToDo = () => {
  const [newTask, setNewTask] = useState({ id: "", name: "" });
  const [arrayToDo, setArrayToDo] = useState(toDoArrayInit);

  const inputNewTaskChanch = (e) => {
    setNewTask({ id: uuidv4(), name: e.target.value });
  };

  const addToDo = () => {
    if (newTask.name.trim() !== "") {
      setArrayToDo([...arrayToDo, newTask]);
      setNewTask({ id: "", name: "" });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addToDo();
    }
  };

  const deleteToDo = (id) => {
    const filteredList = arrayToDo.filter((toDo) => toDo.id !== id);
    setArrayToDo(filteredList);
  };

  return (
    <SectionStyled>
      <ContainerStyled>
        <Title>ToDO List</Title>
        <WrapperFlex>
        <InputNewTask
          value={newTask.name}
          inputNewTaskChanch={inputNewTaskChanch}
          handleKeyDown={handleKeyDown}
        />
        <Btn onClick={addToDo}>Add To Do</Btn>
        </WrapperFlex>
        <NumberToDo>{arrayToDo.length}</NumberToDo>
        <ToDoList arrayToDo={arrayToDo} deleteToDo={deleteToDo} />
      </ContainerStyled>
    </SectionStyled>
  );
};

export default ToDo;
