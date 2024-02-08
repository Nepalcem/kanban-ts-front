import { FC } from "react";
import { StyledTrashIcon } from "./TrashIcon.styled";
import { useAppDispatch } from "components/hooks/typedHooks";
import { deleteBoard } from "appRedux/apiFunctions";

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
    <StyledTrashIcon
      onClick={() => {
        if (hashedID !== undefined) {
          handleDelete(hashedID);
        }
      }}
    ></StyledTrashIcon>
  );
};

export default DeleteBoardBtn;
