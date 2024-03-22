import React, { useEffect } from "react";
import WrapperFlex from "../common/WrapperFlex";
import LabelCheckbox from "./LabelCheckbox";
import InputCheckbox from "./InputCheckbox";
import usePut from "../../hooks/usePut";
import currentDate from "../../helpers/currentDate";
import LoaderThreeCirclesSmall from "../loaders/loaderThreeCirclesSmall/LoaderThreeCirclesSmall";
import { ToastContainer, toast } from "react-toastify";

const CheckboxTask = ({ task, setState }) => {
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
      setState((prevState) => ({
        ...prevState,
        tasks: prevState.tasks.map((task) =>
          task.id === id ? { ...task, checked: !task.checked } : task
        ),
      }));
    }
  }, [id, setState, dataChange]);

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
        <WrapperFlex>
          <InputCheckbox
            type="checkbox"
            name="checkboxTask"
            checked={checked}
            onChange={() => handleCheckboxChange(id)}
          />
          {checked && <LabelCheckbox>Done</LabelCheckbox>}
        </WrapperFlex>
      )}
      <ToastContainer />
    </>
  );
};

export default CheckboxTask;
