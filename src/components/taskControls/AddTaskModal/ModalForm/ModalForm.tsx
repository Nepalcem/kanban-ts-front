import { useState, FC, ChangeEvent, FormEvent } from "react";
import { ModalFormStyled } from "./ModalForm.styled";
import { FaCheck } from "react-icons/fa";
import { LuLoader2 } from "react-icons/lu";
import { FormTextField } from "./ModalForm.styled";
import { toast } from "react-toastify";
import { patchBoard } from "appRedux/apiFunctions";
import { getBoardHashedId, getBoardLoadingSelector, getTasksSelector } from "appRedux/selectors";
import { useAppDispatch, useAppSelector } from "components/hooks/typedHooks";

interface ModalFormProps {
  handleClose: () => void;
  status: string;
  columnIndex: number;
}

const ModalForm: FC<ModalFormProps> = ({ handleClose, status, columnIndex }) => {
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");

  const dispatch = useAppDispatch();
  const isBoardLoading = useAppSelector(getBoardLoadingSelector);
  const tasks = useAppSelector(getTasksSelector);
  const hashedID = useAppSelector(getBoardHashedId);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.name === "title") {
      setTaskTitle(e.currentTarget.value);
    }
    if (e.currentTarget.name === "description") {
      setTaskDescription(e.currentTarget.value);
    }
  };

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (taskTitle.trim().length === 0 || taskDescription.length === 0) {
      toast.warning("Task title and/or description cannot be empty!");
      return;
    }
    const newTaskData = {
      title: taskTitle.trim(),
      description: taskDescription,
      status: status as "done" | "to do" | "in-progress",
      columnIndex,
    };

    const boardObject = {
      hashedID,
      tasks: [...(tasks ?? []), newTaskData],
    };

    try {
      await dispatch(patchBoard(boardObject));
      handleClose();
    } catch (error) {
      console.error("Error creating board:", error);
    }
  };

  return (
    <ModalFormStyled onSubmit={submitHandler}>
      <FormTextField
        type="text"
        name="title"
        title="Title may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
        value={taskTitle}
        autoComplete="off"
        label="Title"
        variant="outlined"
      />
      <FormTextField
        type="text"
        name="description"
        title="Description may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
        value={taskDescription}
        autoComplete="off"
        label="Description"
        variant="outlined"
      />

      <button type="submit" disabled={isBoardLoading}>
        {isBoardLoading ? (
          <LuLoader2 className="loading-icon"></LuLoader2>
        ) : (
          <FaCheck />
        )}
        Confirm
      </button>
    </ModalFormStyled>
  );
};

export default ModalForm;
