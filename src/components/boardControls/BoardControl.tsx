import { getBoardSelector } from "appRedux/selectors";
import { useAppSelector } from "components/hooks/typedHooks";
import CreateBoardModal from "./createBoardModal/CreateBoardModal";
import EditBoardModal from "./editBoardModal/EditBoardModal";
import DeleteBoardBtn from "./DeleteBoardBtn/DeleteBoardBtn";
import { BoardControlMainDiv, BoardControlParagraph } from "./BoardControl.styled";

export default function BoardControl() {
  const board = useAppSelector(getBoardSelector);
  const hashedID = board?.hashedID || '';
  const title = board?.title || '';

  return (
    <BoardControlMainDiv>
      <h2>BoardControls</h2>
      <BoardControlParagraph>
        <CreateBoardModal />
        <span>Create New Board</span>
      </BoardControlParagraph>

      {!board ? (
        <></>
      ) : (
        <>
          <BoardControlParagraph>
            <EditBoardModal hashedID={hashedID} title={title} />
            <span>Update Current Board</span>
          </BoardControlParagraph>

          <BoardControlParagraph>
            <DeleteBoardBtn hashedID={hashedID} />
            <span>Delete Board</span>
          </BoardControlParagraph>
        </>
      )}
    </BoardControlMainDiv>
  );
}
