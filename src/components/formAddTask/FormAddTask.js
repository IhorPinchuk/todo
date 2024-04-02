import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import usePut from "../../hooks/usePut";
import {
  BtnForm,
  Form,
  InputForm,
  LabelForm,
  TextareaForm,
  WrapperFlexForm,
} from "./FormAddTask.styled";
import ErrorTitleInputNewTask from "../Error/ErrorTitleInputNewTask";
import currentDate from "../../helpers/currentDate";
import { usePost } from "../../hooks/usePost";
import LoaderThreeCirclesSmall from "../loaders/loaderThreeCirclesSmall/LoaderThreeCirclesSmall";
import ErrorMessage from "../Error/ErrorMessage";
import { InputCheckbox } from "../checkboxTask/CheckboxTask.styled";

const FormAddTask = ({ payload }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm();
  const { setTasks, setIsOpenModalAddTask, dataTask, setIsOpenModalEditTask } =
    payload;
  const { dataAdd, isLoadingAddData, errorAddData, postData } = usePost();
  const { dataChange, isLoadingChangeData, errorChangeData, putData } =
    usePut();

  useEffect(() => {
    if (dataTask) {
      setValue("newTaskTitle", dataTask.title);
      setValue("newTaskText", dataTask.description);
      setValue("newTaskStatus", dataTask.checked);
    }
  }, [dataTask, setValue]);

  useEffect(() => {
    if (dataAdd && Object.keys(dataAdd).length !== 0) {
      setTasks((prevTasks) => [...prevTasks, dataAdd]);
      reset();
      setIsOpenModalAddTask(
        (prevIsOpenModalAddTask) => !prevIsOpenModalAddTask
      );
    }
  }, [dataAdd, setTasks, reset, setIsOpenModalAddTask]);

  useEffect(() => {
    if (dataChange && Object.keys(dataChange).length !== 0) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === dataChange.id ? { ...task, ...dataChange } : task
        )
      );

      setIsOpenModalEditTask(
        (prevIsOpenModalEditTask) => !prevIsOpenModalEditTask
      );
    }
  }, [dataChange, setTasks, setIsOpenModalEditTask]);

  const onSubmitFormAddTask = (data) => {
    if (data.newTaskTitle.trim() !== "" && data.newTaskText.trim() !== "") {
      const newTask = {
        title: data.newTaskTitle,
        description: data.newTaskText,
        checked: data.newTaskStatus,
        creationDate: currentDate(),
      };

      postData("todos", newTask);
    }
  };

  const onSubmitFormEditTask = (data) => {
    if (data.newTaskTitle.trim() !== "" && data.newTaskText.trim() !== "") {
      const newTask = {
        title: data.newTaskTitle,
        description: data.newTaskText,
        checked: data.newTaskStatus,
        creationDate: currentDate(),
      };

      putData(`todos/${dataTask.id}`, newTask);
    }
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit(
          dataTask ? onSubmitFormEditTask : onSubmitFormAddTask
        )}
      >
        <LabelForm htmlFor="newTaskTitle">
          {dataTask ? "Edit" : "Enter new"} task title
        </LabelForm>
        <InputForm
          id="newTaskTitle"
          type="text"
          placeholder={dataTask ? "Edit task title" : "Enter new task title"}
          {...register("newTaskTitle", {
            required: true,
            minLength: 2,
            maxLength: 50,
          })}
        />
        {errors.newTaskTitle && (
          <ErrorTitleInputNewTask
            typeError={errors.newTaskTitle.type}
            requiredText={
              "Please enter your task. Minimum number of characters is 2, maximum is 50"
            }
            maxLengthText={"Maximum number of characters is 50"}
          />
        )}
        <LabelForm htmlFor="newTaskText">
          {dataTask ? "Edit" : "Enter new"} task text
        </LabelForm>
        <TextareaForm
          id="newTaskText"
          type="text"
          placeholder={dataTask ? "Edit task text" : "Enter new task text"}
          {...register("newTaskText", {
            required: true,
            minLength: 2,
            maxLength: 5000,
          })}
        />
        {errors.newTaskText && (
          <ErrorTitleInputNewTask
            typeError={errors.newTaskText.type}
            requiredText={
              "Please enter your task. Minimum number of characters is 2, maximum is 5000"
            }
            maxLengthText={"Maximum number of characters is 5000"}
          />
        )}
        <WrapperFlexForm>
          <LabelForm htmlFor="newTaskStatus">Task status</LabelForm>
          <InputCheckbox
            id="newTaskStatus"
            type="checkbox"
            {...register("newTaskStatus", {
              checked: false,
            })}
          />
        </WrapperFlexForm>
        <BtnForm
          type="submit"
          disabled={isLoadingAddData || isLoadingChangeData}
        >
          {isLoadingAddData || isLoadingChangeData ? (
            <LoaderThreeCirclesSmall
              isLoading={isLoadingAddData || isLoadingChangeData}
            />
          ) : dataTask ? (
            "Save"
          ) : (
            "Add task"
          )}
        </BtnForm>
      </Form>
      {(errorAddData || errorChangeData) && (
        <ErrorMessage error={errorAddData || errorChangeData} />
      )}
    </>
  );
};

export default FormAddTask;
