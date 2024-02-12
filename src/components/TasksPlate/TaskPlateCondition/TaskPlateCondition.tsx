import { useAppSelector } from "components/hooks/typedHooks";
import { getBoardSelector } from "appRedux/selectors";
import TasksPlate from "../TasksPlate";

export default function TaskPlateCondition() {
  const board = useAppSelector(getBoardSelector);

  return (
    <>
      {board ? (
        <TasksPlate />
      ) : (
        <div>
          <h2>Please consider creating a Board to start working with tasks...</h2>
        </div>
      )}
    </>
  );
}
