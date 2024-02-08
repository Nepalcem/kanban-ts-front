import { RootState } from "./store";

const getBoardSelector = (state: RootState) => state.boardData.board;
const getBoardLoadingSelector = (state: RootState) => state.boardData.isLoading;


export { getBoardSelector, getBoardLoadingSelector };