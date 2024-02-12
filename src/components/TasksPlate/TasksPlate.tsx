import { useEffect, useState } from "react";
import { columns } from "./data";
import Column from "./Column/Column";
import { TasksWrapper } from "./TasksPlate.styled";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { ITask } from "App/AppTypes";
import { useAppDispatch, useAppSelector } from "components/hooks/typedHooks";
import { getBoardHashedId, getTasksSelector } from "appRedux/selectors";
import { patchBoard } from "appRedux/apiFunctions";

export default function TasksPlate() {
  const boardTasks = useAppSelector(getTasksSelector);
  const hashedID = useAppSelector(getBoardHashedId);
  const [tasks, setTasks] = useState<ITask[]>(boardTasks || []);

  useEffect(() => {
    setTasks(boardTasks || []);
  }, [boardTasks]);

  const dispatch = useAppDispatch();

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startColumn = source.droppableId;
    const endColumn = destination.droppableId;
    const newTasks = [...tasks];

    const draggedTaskIndex = newTasks.findIndex(
      (task) => task.title === draggableId
    );

    if (draggedTaskIndex === -1) {
      console.error("Dragged task not found");
      return;
    }

    const draggedTask = { ...newTasks[draggedTaskIndex] };

    // If the task was moved within the same column
    if (startColumn === endColumn) {
      draggedTask.columnIndex = destination.index;

      // Update the columnIndex of other tasks
      newTasks.forEach((task, index) => {
        if (
          task.columnIndex <= destination.index &&
          source.index < task.columnIndex &&
          index !== draggedTaskIndex &&
          task.status === startColumn
        ) {
          task = { ...task, columnIndex: task.columnIndex - 1 };
          newTasks[index] = task;
        }
        if (
          task.columnIndex >= destination.index &&
          source.index > task.columnIndex &&
          index !== draggedTaskIndex &&
          task.status === startColumn
        ) {
          task = { ...task, columnIndex: task.columnIndex + 1 };
          newTasks[index] = task;
        }
      });

      newTasks[draggedTaskIndex] = draggedTask;
    } else if (startColumn !== endColumn) {
      // Move between columns
      draggedTask.status = destination.droppableId as
        | "to do"
        | "in-progress"
        | "done";
      draggedTask.columnIndex = destination.index;

      newTasks.forEach((task, index) => {
        if (
          task.status === source.droppableId &&
          task.columnIndex > source.index
        ) {
          task = { ...task, columnIndex: task.columnIndex - 1 };
          newTasks[index] = task;
        }
        if (
          task.status === destination.droppableId &&
          task.columnIndex >= destination.index &&
          index !== draggedTaskIndex
        ) {
          task = { ...task, columnIndex: task.columnIndex + 1 };
          newTasks[index] = task;
        }
      });

      newTasks[draggedTaskIndex] = draggedTask;
    }

    const boardObject = {
      hashedID,
      tasks: newTasks,
    };

    dispatch(patchBoard(boardObject));
    setTasks(newTasks);
  };

  return (
    <>
      <h2>You may Drag and Drop Tasks between columns to change the Status</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <TasksWrapper>
          {columns.map((column) => {
            const columnTasks = tasks
              .filter((task) => task.status === column)
              .sort((a, b) => a.columnIndex - b.columnIndex);

            return <Column key={column} column={column} tasks={columnTasks} />;
          })}
        </TasksWrapper>
      </DragDropContext>
    </>
  );
}
