import { getBoardSelector } from "appRedux/selectors";
import { useAppSelector } from "components/hooks/typedHooks";
import { BoardStatusParagraph } from "./BoardStatus.styled";

export default function BoardStatus() {
  const board = useAppSelector(getBoardSelector);

  return (
    <div>
      <h2>BoardStatus:</h2>
      <BoardStatusParagraph>
        Board Title: <span>{board?.title}</span>
      </BoardStatusParagraph>
      <BoardStatusParagraph>
        Board ID: <i>{board?.hashedID}</i>
      </BoardStatusParagraph>
    </div>
  );
}
