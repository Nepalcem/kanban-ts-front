import React, { useEffect, useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { ColumnContainer, ColumnTitle, TaskList } from "./Column.styled";
import Task from "../Task/Task";
import { ITask } from "App/AppTypes";
import AddTaskModal from "components/taskControls/AddTaskModal/AddTaskModal";

interface IColumnProps {
  column: string;
  tasks: ITask[];
}

const Column: React.FC<IColumnProps> = ({ column, tasks }) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  const columnLength = tasks.length;

  return (
    <ColumnContainer>
      <ColumnTitle>{column}</ColumnTitle>
      <Droppable droppableId={column}>
        {(provided) => {
          return (
            <TaskList ref={provided.innerRef} {...provided.droppableProps}>
              {tasks.map((task, index) => {
                return <Task key={task.title} task={task} index={index} />;
              })}
              {provided.placeholder}
            </TaskList>
          );
        }}
      </Droppable>
      <AddTaskModal status={column} columnIndex={columnLength}/>
    </ColumnContainer>
  );
};

export default Column;
