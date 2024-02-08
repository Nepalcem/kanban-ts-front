import { getBoardSelector } from "appRedux/selectors";
import { useAppSelector } from "components/hooks/typedHooks";

export default function BoardStatus() {
  const board = useAppSelector(getBoardSelector);

  return (
    <div>
      BoardStatus:
      <h2>Board Title: {board?.title}</h2>
      <p>Board ID: {board?.hashedID}</p>
    </div>
  );
}
