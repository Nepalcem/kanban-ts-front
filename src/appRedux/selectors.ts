import { RootState } from "./store";

const getBoardSelector = (state: RootState) => state.boardData.board;
const getBoardLoadingSelector = (state: RootState) => state.boardData.isLoading;
const getBoardHashedId = (state: RootState) => state.boardData.board?.hashedID;
const getBoardId = (state: RootState) => state.boardData.board?._id;

const getTasksSelector = (state: RootState) => state.tasks.tasks;
const getTaskLoadingSelector = (state: RootState) => state.tasks.isTaskLoading;


export {
  getBoardSelector,
  getBoardLoadingSelector,
  getTasksSelector,
  getBoardHashedId,
  getBoardId,
  getTaskLoadingSelector,
};