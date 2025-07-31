import { FC } from "react";
import { StyledTrashIcon } from "./TrashIcon.styled";
import { useAppDispatch } from "components/hooks/typedHooks";
import { deleteBoard } from "appRedux/apiFunctions";
import { BoardControlButton } from "../BoardControl.styled";

interface DeleteBoardBtnProps {
  hashedID: string | undefined;
}

const DeleteBoardBtn: FC<DeleteBoardBtnProps> = ({ hashedID }) => {
  const dispatch = useAppDispatch();

  const handleDelete = (hashedID: string) => {
    const isConfirmed = window.confirm(`Do you want to delete Board?`);
    if (isConfirmed) {
      dispatch(deleteBoard(hashedID));
    }
  };

  return (
    <BoardControlButton
      onClick={() => {
        if (hashedID !== undefined) {
          handleDelete(hashedID);
        }
      }}
    >
      <StyledTrashIcon/>
      <span style={{margin: "0 auto"}}>Delete Board</span>
    </BoardControlButton>
  );
};

export default DeleteBoardBtn;
