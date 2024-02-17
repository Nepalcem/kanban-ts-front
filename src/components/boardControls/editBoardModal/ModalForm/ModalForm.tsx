import { useState, FC, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
import { patchBoard } from "appRedux/apiFunctions";
import { getBoardLoadingSelector } from "appRedux/selectors";
import { useAppDispatch, useAppSelector } from "components/hooks/typedHooks";
import { ModalFormStyled } from "./ModalForm.styled";
import { FaCheck } from "react-icons/fa";
import { LuLoader2 } from "react-icons/lu";
import { FormTextField } from "./ModalForm.styled";

interface IBoardEditModalProps {
  hashedID: string;
  title: string;
  handleClose: () => void;
}

const ModalForm: FC<IBoardEditModalProps> = ({ hashedID, title, handleClose }) => {
  const [boardTitle, setBoardTitle] = useState<string>(title || "");

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
    const updatedBoard = {
      hashedID,
      title: boardTitle.trim(),
    };

    await dispatch(patchBoard(updatedBoard));
    handleClose();
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
