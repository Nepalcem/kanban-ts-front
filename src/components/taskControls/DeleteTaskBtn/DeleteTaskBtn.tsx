import { FC } from "react";
import { StyledTrashIcon } from "./TrashIcon.styled";
import { useAppDispatch } from "components/hooks/typedHooks";
import { deleteTask } from "appRedux/apiFunctions";

interface DeleteTaskBtnProps {
  _id: string;
  title: string;
}

const DeleteTaskBtn: FC<DeleteTaskBtnProps> = ({ _id, title }) => {
  const dispatch = useAppDispatch();

  const handleDelete = (_id: string, title: string) => {
    const isConfirmed = window.confirm(`Do you want to delete Task ${title}?`);
    if (isConfirmed) {
      dispatch(deleteTask(_id));
    }
  };

  return (
    <StyledTrashIcon
      onClick={() => {
        handleDelete(_id, title);
      }}
    ></StyledTrashIcon>
  );
};

export default DeleteTaskBtn;
