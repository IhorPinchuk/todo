import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import useDelete from "../../../hooks/useDelete";
import CheckboxTask from "../../checkboxTask/CheckboxTask";
import ModalAddEditTask from "../../modals/modalAddEditTask/ModalAddEditTask";
import Modal from "../../modals/modal/Modal";
import LoaderThreeCirclesSmall from "../../loaders/loaderThreeCirclesSmall/LoaderThreeCirclesSmall";
import {
  BtnDeleteTaskTodoList,
  BtnEditTaskTodoList,
  LiTodoList,
  LinkTodoList,
  TextDescriptionTask,
  TextTitleTask,
  WrapperContent,
  WrapperTextContent,
} from "./ToDoListItem.styled";

const ToDoListItem = ({ task, index, setTasks }) => {
  const { id, title, description, checked } = task;
  const [isOpenModalEditTask, setIsOpenModalEditTask] = useState(false);
  const { isLoadingDelete, errorDelete, deleteData } = useDelete();
  const formattedDescription = description ? description.split("\n").join("\n") : "";

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
    }
  }, [errorDelete]);

  const editTask = () => {
    setIsOpenModalEditTask(
      (prevIsOpenModalEditTask) => !prevIsOpenModalEditTask
    );
  };

  const onSuccessDelete = () => {
    setTasks((prevTasks) => {
      const filteredList = prevTasks.filter((task) => task.id !== id);
      return  [...filteredList] ;
    });
  };

  const deleteTask = (id) => {    
    deleteData(`todos/${id}`, onSuccessDelete);
  };

  return (
          <LiTodoList $backgroundRed={checked}>      
        <LinkTodoList to={`${id}`} $borderRed={checked} >
          <WrapperTextContent>
            <TextTitleTask $lineThrough={checked}>
              {index + 1}) {title}
            </TextTitleTask>
            <TextDescriptionTask $lineThrough={checked}>
              {formattedDescription}
            </TextDescriptionTask>
          </WrapperTextContent>
          </LinkTodoList>
        <WrapperContent>
          <CheckboxTask task={task} setTasks={setTasks} />
          <BtnEditTaskTodoList type="button" name="editTask" onClick={editTask}>
            Edit task
          </BtnEditTaskTodoList>
          <BtnDeleteTaskTodoList
            type="button"
            name="deleteTask"
            disabled={isLoadingDelete}
            onClick={() => deleteTask(id)}
          >
            {isLoadingDelete ? (
              <LoaderThreeCirclesSmall isLoading={isLoadingDelete} />
            ) : (
              "Delete task"
            )}
          </BtnDeleteTaskTodoList>
        </WrapperContent>        
        <Modal
          isOpen={isOpenModalEditTask}
          setIsOpen={setIsOpenModalEditTask}
          children={
            <ModalAddEditTask
            setTasks={setTasks}
              dataTask={task}
              setIsOpenModalEditTask={setIsOpenModalEditTask}
            />
          }
        />
        
        {/* <ToastContainer /> */}
      </LiTodoList>
      );
};

export default ToDoListItem;
