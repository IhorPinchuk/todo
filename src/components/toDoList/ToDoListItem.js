import Li from "../common/Li";
import Text from "../common/Text";
import Btn from "../common/Btn";
import WrapperText from "../common/WrapperText";
import CheckboxTask from "../checkboxTask/CheckboxTask";
import ModalAddEditTask from "../modals/modalAddEditTask/ModalAddEditTask";
import Modal from "../modals/modal/Modal";
import { useState } from "react";

const ToDoListItem = ({ task, setState, setIsOpenModalAddTask }) => {
  const { id, title, description, checked } = task;
  const [isOpenModalEditTask, setIsOpenModalEditTask] = useState(false);
  const editTask = (e) => {
    setIsOpenModalEditTask(
      (prevIsOpenModalEditTask) => !prevIsOpenModalEditTask
    );
  };

  const deleteTask = (id) => {
    setState((prevState) => {
      const filteredList = prevState.tasks.filter((task) => task.id !== id);
      return { ...prevState, tasks: filteredList };
    });
  };

  return (
    <Li>
      <WrapperText>
        <Text $lineThrough={!checked}>{title}</Text>
        <Text $lineThrough={!checked}>{description}</Text>
      </WrapperText>
      <CheckboxTask id={id} checked={checked} setState={setState} />
      <Btn type="button" name="editTask" onClick={editTask}>
        Edit task
      </Btn>
      <Btn type="button" name="deleteTask" onClick={() => deleteTask(id)}>
        Delete task
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
