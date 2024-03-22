import Li from "../common/Li";
import Text from "../common/Text";
import Btn from "../common/Btn";
import WrapperText from "../common/WrapperText";
import CheckboxTask from "../checkboxTask/CheckboxTask";
import ModalAddEditTask from "../modals/modalAddEditTask/ModalAddEditTask";
import Modal from "../modals/modal/Modal";
import { useEffect, useState } from "react";
import useDelete from "../../hooks/useDelete";
import LoaderThreeCirclesSmall from "../loaders/loaderThreeCirclesSmall/LoaderThreeCirclesSmall";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToDoListItem = ({ task, setState }) => {
  const { id, title, description, checked } = task;
  const [isOpenModalEditTask, setIsOpenModalEditTask] = useState(false);
  const { isLoadingDelete, errorDelete, setErrorDelete, deleteData } =
    useDelete();

  useEffect(() => {
    if (errorDelete) {
      toast.error(`Something went wrong! ${errorDelete}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      setTimeout(() => {
        setErrorDelete(null);
      }, 5000);
    }
  }, [errorDelete, setErrorDelete]);

  const editTask = () => {
    setIsOpenModalEditTask(
      (prevIsOpenModalEditTask) => !prevIsOpenModalEditTask
    );
  };

  const onSuccessDelete = () => {
    setState((prevState) => {
      const filteredList = prevState.tasks.filter((task) => task.id !== id);
      return { ...prevState, tasks: filteredList };
    });
  };

  const deleteTask = (id) => {
    deleteData(`todos/${id}`, onSuccessDelete);
  };

  return (
    <Li>
      <ToastContainer />
      <WrapperText>
        <Text $lineThrough={!checked}>{title}</Text>
        <Text $lineThrough={!checked}>{description}</Text>
      </WrapperText>
      <CheckboxTask task={task} setState={setState} />
      <Btn type="button" name="editTask" onClick={editTask}>
        Edit task
      </Btn>
      <Btn
        type="button"
        name="deleteTask"
        disabled={isLoadingDelete || errorDelete}
        onClick={() => deleteTask(id)}
      >
        {isLoadingDelete ? (
          <LoaderThreeCirclesSmall isLoading={isLoadingDelete} />
        ) : (
          "Delete task"
        )}
      </Btn>
      <Modal
        isOpen={isOpenModalEditTask}
        setIsOpen={setIsOpenModalEditTask}
        children={
          <ModalAddEditTask
            setState={setState}
            dataTask={task}
            setIsOpenModalEditTask={setIsOpenModalEditTask}
          />
        }
      />
    </Li>
  );
};

export default ToDoListItem;
