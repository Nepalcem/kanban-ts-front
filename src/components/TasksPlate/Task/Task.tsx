import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { ITask } from "App/AppTypes";
import DeleteTaskBtn from "components/taskControls/DeleteTaskBtn/DeleteTaskBtn";
import EditTaskModal from "components/taskControls/EditTaskModal/EditTaskModal";
import {
  TaskButtons,
  TaskTitle,
  TaskWrapper,
  TaskTitleSpan,
} from "./Task.styled";

interface ITaskProps {
  task: ITask;
  index: number;
}

const Task: React.FC<ITaskProps> = ({ task, index }) => {
  const { status, title, description, columnIndex, _id } = task;

  return (
    <Draggable draggableId={_id} index={index}>
      {(provided) => {
        return (
          <TaskWrapper
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <TaskTitle>
              <TaskTitleSpan>Title: </TaskTitleSpan>
              {title}
            </TaskTitle>
            <p>Description: {description}</p>
            <TaskButtons>
              <EditTaskModal
                title={title}
                status={status}
                description={description}
                columnIndex={columnIndex}
                _id={_id}
              />
              <DeleteTaskBtn _id={_id} title={title} />
            </TaskButtons>
          </TaskWrapper>
        );
      }}
    </Draggable>
  );
};

export default Task;
