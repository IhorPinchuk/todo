import React, { useEffect } from "react";

import Form from "../common/Form";
import WrapperFlex from "../common/WrapperFlex";
import Label from "../common/Label";
import Input from "../common/Input";
import { useForm } from "react-hook-form";
import Btn from "../common/Btn";
import ErrorTitleInputNewTask from "../Error/ErrorTitleInputNewTask";
import Textarea from "../common/Textarea";

import InputCheckbox from "../checkboxTask/InputCheckbox";
import currentDate from "../../helpers/currentDate";
import { usePost } from "../../hooks/usePost";
import LoaderThreeCirclesSmall from "../loaders/loaderThreeCirclesSmall/LoaderThreeCirclesSmall";
import ErrorMessage from "../Error/ErrorMessage";
import usePut from "../../hooks/usePut";

const FormAddTask = ({ payload }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm();
  const { setState, setIsOpenModalAddTask, dataTask, setIsOpenModalEditTask } =
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
      setState((prevState) => ({
        ...prevState,
        tasks: [...prevState.tasks, dataAdd],
      }));
      reset();
      setIsOpenModalAddTask(
        (prevIsOpenModalAddTask) => !prevIsOpenModalAddTask
      );
    }
  }, [dataAdd, setState, reset, setIsOpenModalAddTask]);

  useEffect(() => {
    if (dataChange && Object.keys(dataChange).length !== 0) {
      setState((prevState) => ({
        ...prevState,
        tasks: prevState.tasks.map((task) =>
          task.id === dataChange.id ? { ...task, ...dataChange } : task
        ),
      }));

      setIsOpenModalEditTask(
        (prevIsOpenModalEditTask) => !prevIsOpenModalEditTask
      );
    }
  }, [dataChange, setState, setIsOpenModalEditTask]);

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
        <WrapperFlex>
          <Label htmlFor="newTaskTitle">
            {dataTask ? "Edit" : "Enter new"} task title
          </Label>
          <Input
            id="newTaskTitle"
            type="text"
            placeholder={dataTask ? "Edit task title" : "Enter new task title"}
            {...register("newTaskTitle", {
              required: true,
              minLength: 2,
              maxLength: 10,
            })}
          />
          {errors.newTaskTitle && (
            <ErrorTitleInputNewTask
              typeError={errors.newTaskTitle.type}
              requiredText={
                "Please enter your task. Minimum number of characters is 2, maximum is 10"
              }
              maxLengthText={"Maximum number of characters is 10"}
            />
          )}
        </WrapperFlex>
        <WrapperFlex>
          <Label htmlFor="newTaskText">
            {dataTask ? "Edit" : "Enter new"} task text
          </Label>
          <Textarea
            id="newTaskText"
            type="text"
            placeholder={dataTask ? "Edit task text" : "Enter new task text"}
            {...register("newTaskText", {
              required: true,
              minLength: 2,
              maxLength: 30,
            })}
          />
          {errors.newTaskText && (
            <ErrorTitleInputNewTask
              typeError={errors.newTaskText.type}
              requiredText={
                "Please enter your task. Minimum number of characters is 2, maximum is 30"
              }
              maxLengthText={"Maximum number of characters is 30"}
            />
          )}
        </WrapperFlex>
        <WrapperFlex $lexDirection>
          <Label htmlFor="newTaskStatus">Task status</Label>
          <InputCheckbox
            id="newTaskStatus"
            type="checkbox"
            {...register("newTaskStatus", {
              checked: false,
            })}
          />
        </WrapperFlex>
        <Btn type="submit" disabled={isLoadingAddData || isLoadingChangeData}>
          {isLoadingAddData || isLoadingChangeData ? (
            <LoaderThreeCirclesSmall
              isLoading={isLoadingAddData || isLoadingChangeData}
            />
          ) : dataTask ? (
            "Edit task"
          ) : (
            "Add task"
          )}
        </Btn>
      </Form>
      {(errorAddData || errorChangeData) && (
        <ErrorMessage error={errorAddData || errorChangeData} />
      )}
    </>
  );
};

export default FormAddTask;
