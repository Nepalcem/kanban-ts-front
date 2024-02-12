import { FC } from "react";
import { StyledTrashIcon } from "./TrashIcon.styled";
import { useAppDispatch, useAppSelector } from "components/hooks/typedHooks";
import { patchBoard } from "appRedux/apiFunctions";
import { getBoardHashedId, getTasksSelector } from "appRedux/selectors";

interface DeleteTaskBtnProps {
  title: string;
}

const DeleteTaskBtn: FC<DeleteTaskBtnProps> = ({ title }) => {
  const dispatch = useAppDispatch();
   const tasks = useAppSelector(getTasksSelector);
  const hashedID = useAppSelector(getBoardHashedId);
  
  const newTasks = tasks ? tasks.filter(task => task.title !== title) : [];

   const boardObject = {
    hashedID,
    tasks: newTasks,
  };

  const handleDelete = (title: string) => {
    const isConfirmed = window.confirm(`Do you want to delete Task ${title}?`);
    if (isConfirmed) {
      dispatch(patchBoard(boardObject));
    }
  };

  return (
    <StyledTrashIcon
      onClick={() => {
        if (title !== undefined) {
          handleDelete(title);
        }
      }}
    ></StyledTrashIcon>
  );
};

export default DeleteTaskBtn;
