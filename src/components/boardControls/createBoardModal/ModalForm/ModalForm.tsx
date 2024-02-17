import { toast } from "react-toastify";
import { useState, FC, ChangeEvent, FormEvent } from "react";
import { createBoard} from "appRedux/apiFunctions";
import { getBoardLoadingSelector } from "appRedux/selectors";
import { useAppDispatch, useAppSelector } from "components/hooks/typedHooks";
import { getTasks } from "appRedux/slices/tasksSlice";
import { ModalFormStyled } from "./ModalForm.styled";
import { FaCheck } from "react-icons/fa";
import { LuLoader2 } from "react-icons/lu";
import { FormTextField } from "./ModalForm.styled";

interface ModalFormProps {
  handleClose: () => void; 
}

const ModalForm: FC<ModalFormProps> = ({ handleClose }) => {
  const [boardTitle, setBoardTitle] = useState<string>("");

  const dispatch = useAppDispatch();
  const isBoardLoading = useAppSelector(getBoardLoadingSelector);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.name === "title") {
      setBoardTitle(e.currentTarget.value);
    }
  };

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (boardTitle.trim().length === 0) {
      toast.warning("Board title cannot be empty!");
      return;
    }
    const boardData = {
      title: boardTitle.trim(),
    };

    try {
      await dispatch(createBoard(boardData)).then((response) => {
        dispatch(getTasks(response.payload.tasks));
      });
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
        value={boardTitle}
        autoComplete="off"
        label="Title"
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
