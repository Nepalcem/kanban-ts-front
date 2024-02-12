import React from "react";
import { TaskButtons, TaskTitle, TaskWrapper } from "./Task.styled";
import { Draggable } from "react-beautiful-dnd";
import { ITask } from "App/AppTypes";
import DeleteTaskBtn from "components/taskControls/DeleteTaskBtn/DeleteTaskBtn";
import EditTaskModal from "components/taskControls/EditTaskModal/EditTaskModal";

interface ITaskProps {
  task: ITask;
  index: number;
}

const Task: React.FC<ITaskProps> = ({ task, index }) => {
  const { status, title, description, columnIndex } = task;
  return (
    <Draggable draggableId={title} index={index}>
      {(provided) => {
        return (
          <TaskWrapper
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <TaskTitle>{title}</TaskTitle>
            <p>{description}</p>
            <TaskButtons>
              <EditTaskModal
                title={title}
                status={status}
                description={description}
                columnIndex={columnIndex}
              />
              <DeleteTaskBtn title={title} />
            </TaskButtons>
          </TaskWrapper>
        );
      }}
    </Draggable>
  );
};

export default Task;
