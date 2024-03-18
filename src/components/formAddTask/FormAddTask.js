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

const FormAddTask = ({ setState }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { dataAdd, isLoadingAddData, errorAddData, postData } = usePost();

  useEffect(() => {
    if (Object.keys(dataAdd).length !== 0) {
      setState((prevState) => ({
        ...prevState,
        tasks: [...prevState.tasks, dataAdd],
      }));
      reset();
    }
  }, [dataAdd, setState, reset]);

  const onSubmitForm = (data) => {
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

  return (
    <Form onSubmit={handleSubmit(onSubmitForm)}>
      <WrapperFlex>
        <Label htmlFor="newTaskTitle">Enter new task title</Label>
        <Input
          id="newTaskTitle"
          type="text"
          placeholder="Enter new task title"
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
        <Label htmlFor="newTaskText">Enter new task title</Label>
        <Textarea
          id="newTaskText"
          type="text"
          placeholder="Enter new task text"
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
      <Btn type="submit">Add task</Btn>
    </Form>
  );
};

export default FormAddTask;
