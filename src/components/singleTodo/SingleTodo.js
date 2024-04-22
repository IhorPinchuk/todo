import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useFetch } from "../../hooks/useFetch";
import ContainerStyled from "../common/ContainerStyled";
import SectionStyled from "../common/SectionStyled";
import LoaderThreeCircles from "../loaders/loaderThreeCircles/LoaderThreeCircles";
import ErrorMessage from "../Error/ErrorMessage";
import {
  BtnSingleTodo,
  DescriptionTaskSingleTodo,
  InputSingleCheckbox,
  InputSingleTodo,
  LabelSingleCheckbox,
  LinkSingleTodo,
  TextareaSingleTodo,
  TitleTaskSingleTodo,
  WrapperBtnSingleTodo,
  WrapperContentSingleTodo,
  WrapperSingleCheckbox,
} from "./SingleTodo.styled";
import usePut from "../../hooks/usePut";
import LoaderThreeCirclesSmall from "../loaders/loaderThreeCirclesSmall/LoaderThreeCirclesSmall"

const SingleTodo = () => {
  const params = useParams();
  const [task, setTask] = useState({});
  const { data: todo, isLoading, error, fetchData } = useFetch();
  const { dataChange: dataSingleChangeTodo, isLoadingChangeData, errorChangeData, putData } = usePut();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState({
    title: "",
    description: "",
    checked: false,
  });
  const textareaRef = useRef(null);
  const formattedDescription = Object.keys(task).length !== 0 
    ? task.description.split("\n").join("\n")
    : "";

    const navigate = useNavigate();

  useEffect(() => {
    if (!todo && !isLoading && !error) {
      fetchData(`todos/${params.id}`);
    }
  }, [error, fetchData, isLoading, params.id, todo]);

  useEffect(() => {
    if (todo) {
      setTask(prevTask => ({...prevTask, ...todo}))
    }
  }, [todo]);

  useEffect(() => {
    if (dataSingleChangeTodo) {
      setTask(prevTask => ({...prevTask, ...dataSingleChangeTodo}));
      setIsEditing(false);
    }
  }, [dataSingleChangeTodo]);

  useEffect(() => {
    if (error) {
      navigate("/error-page", { state: { error: error }, replace: true });
    }
  }, [navigate, error]);

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedTodo({
      title: task.title,
      description: task.description,
      checked: task.checked,
    });
    setTimeout(() => {
      adjustTextareaHeight();
    }, 0);
  };

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setEditedTodo({
      ...editedTodo,
      [name]: value,
    });

    setTimeout(() => {
      adjustTextareaHeight();
    }, 0);
  };

  const handleSingleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setEditedTodo({
      ...editedTodo,
      checked: checked,
    });
  };

  const handleSaveClick = () => {
    putData(`todos/${params.id}`, editedTodo);
  };

  return isLoading ? (
    <LoaderThreeCircles isLoading={isLoading} />
  ) : (
    <SectionStyled>
      <ContainerStyled>
        {!isEditing ? (
          task && (
            <WrapperContentSingleTodo $backgroundRed = {task.checked}>
              <TitleTaskSingleTodo>{task.title}</TitleTaskSingleTodo>
              <DescriptionTaskSingleTodo>
                {formattedDescription}
              </DescriptionTaskSingleTodo>
              <WrapperBtnSingleTodo>
                <LinkSingleTodo to="/todos">Go to todo list</LinkSingleTodo>
                <BtnSingleTodo onClick={handleEditClick}>
                  Edit task
                </BtnSingleTodo>
              </WrapperBtnSingleTodo>
              </WrapperContentSingleTodo>
          )
        ) : (
          <>
           <WrapperContentSingleTodo $backgroundRed = {editedTodo.checked}>
            <InputSingleTodo $borderRed = {editedTodo.checked}
              type="text"
              name="title"
              value={editedTodo.title}
              autoFocus
              onChange={handleInputChange}
            />
            <TextareaSingleTodo $borderRed = {editedTodo.checked}
              ref={textareaRef}
              name="description"
              value={editedTodo.description}
              onChange={handleInputChange}
            />
            <WrapperSingleCheckbox>
              <LabelSingleCheckbox htmlFor="singleStatusCheckbox">
                Task status
              </LabelSingleCheckbox>
              <InputSingleCheckbox
                type="checkbox"
                id="singleStatusCheckbox"
                checked={editedTodo.checked}
                onChange={handleSingleCheckboxChange}
              />
            </WrapperSingleCheckbox>
            <BtnSingleTodo
              $marginLeftAuto
              $marginRightAuto
              onClick={handleSaveClick}
            >
              {isLoadingChangeData ? <LoaderThreeCirclesSmall /> : "Save"}
            </BtnSingleTodo>
            </WrapperContentSingleTodo>
            {errorChangeData && <ErrorMessage $textAlignCenter error={errorChangeData} />}
          </>
        )}
      </ContainerStyled>
    </SectionStyled>
  );
};

export default SingleTodo;