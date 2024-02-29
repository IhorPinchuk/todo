import React from "react";
import { v4 as uuidv4 } from "uuid";

import Form from "./common/Form";
import WrapperFlex from "./common/WrapperFlex";
import Label from "./common/Label";
import Input from "./common/Input";
import { useForm } from "react-hook-form";
import Btn from "./common/Btn";
import ErrorTextInputNewTask from "./Error/ErrorTextInputNewTask";

const FormAddTask = ({ setState }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitForm = (data) => {
    if (data.newTaskText.trim() !== "") {
      const newTask = { id: uuidv4(), name: data.newTaskText, isActive: true };
      setState((prevState) => ({
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      }));
      reset();
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitForm)}>
      <WrapperFlex>
        <Label htmlFor="newTaskText">Enter new task</Label>
        <Input
          id="newTaskText"
          type="text"
          placeholder="New task"
          {...register("newTaskText", {
            required: true,
            minLength: 2,
            maxLength: 10,
          })}
        />

        {errors.newTaskText && (
          <ErrorTextInputNewTask typeError={errors.newTaskText.type} />
        )}
      </WrapperFlex>
      <Btn type="submit">Add task</Btn>
    </Form>
  );
};

export default FormAddTask;
