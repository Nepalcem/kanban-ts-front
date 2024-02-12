import { RootState } from "./store";

const getBoardSelector = (state: RootState) => state.boardData.board;
const getBoardLoadingSelector = (state: RootState) => state.boardData.isLoading;
const getTasksSelector = (state: RootState) => state.boardData.board?.tasks;
const getBoardHashedId = (state: RootState) => state.boardData.board?.hashedID;


export {
  getBoardSelector,
  getBoardLoadingSelector,
  getTasksSelector,
  getBoardHashedId,
};