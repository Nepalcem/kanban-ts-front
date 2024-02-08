import { getBoardSelector } from "appRedux/selectors";
import { useAppSelector } from "components/hooks/typedHooks";
import CreateBoardModal from "./createBoardModal/CreateBoardModal";
import EditBoardModal from "./editBoardModal/EditBoardModal";
import DeleteBoardBtn from "./DeleteBoardBtn/DeleteBoardBtn";

export default function BoardControl() {
  const board = useAppSelector(getBoardSelector);
  const hashedID = board?.hashedID;
  const title = board?.title;

  return (
    <div>
      BoardControl
      {!board ? (
        <>
          <p>Create Board</p>
          <CreateBoardModal />
        </>
      ) : (
        <>
          <p>Update Current Board</p>
          <EditBoardModal hashedID={hashedID} title={title} />
          <p>Delete Board</p>
          <DeleteBoardBtn hashedID={hashedID} />
        </>
      )}
    </div>
  );
}
