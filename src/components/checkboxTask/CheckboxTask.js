import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import usePut from "../../hooks/usePut";
import { InputCheckbox, LabelCheckbox } from "./CheckboxTask.styled";
import currentDate from "../../helpers/currentDate";
import LoaderThreeCirclesSmall from "../loaders/loaderThreeCirclesSmall/LoaderThreeCirclesSmall";

const CheckboxTask = ({ task, setTasks }) => {
  const { id, checked } = task;
  const { dataChange, isLoadingChangeData, errorChangeData, putData } =
    usePut();

  useEffect(() => {
    if (errorChangeData) {
      toast.error(`Something went wrong! ${errorChangeData}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }, [errorChangeData]);

  useEffect(() => {
    if (dataChange && Object.keys(dataChange).length !== 0) {
      setTasks((prevTasks) => 
      prevTasks.map((task) =>
          task.id === id ? { ...task, checked: !task.checked } : task
        ),
      );
    }
  }, [id, setTasks, dataChange]);

  const handleCheckboxChange = (id) => {
    const newCheckedTask = {
      ...task,
      checked: !task.checked,
      creationDate: currentDate(),
    };
    putData(`todos/${id}`, newCheckedTask);
  };

  return (
    <>
      {isLoadingChangeData ? (
        <LoaderThreeCirclesSmall />
      ) : (
        <>
          {checked && <LabelCheckbox htmlFor={`listTaskStatus${id}`}>Done</LabelCheckbox>}
          <InputCheckbox
          id={`listTaskStatus${id}`}
            type="checkbox"
            name="checkboxTask"
            checked={checked}
            onChange={() => handleCheckboxChange(id)}
          />
        </>
      )}
      <ToastContainer />
    </>
  );
};

export default CheckboxTask;
