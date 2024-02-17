import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBoard, IBoardState, ITask } from "App/AppTypes";
import {
  createBoard,
  getBoard,
  patchBoard,
  deleteBoard,
} from "../apiFunctions";


const boardInitialState: IBoardState = {
  board: null,
  isLoading: false,
  error: null,
};

const boardSlice = createSlice({
  name: "board",
  initialState: boardInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBoard.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(
        createBoard.fulfilled,
        (state, action: PayloadAction<IBoard>) => {
          state.board = action.payload;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(getBoard.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(
        getBoard.fulfilled,
        (state, action: PayloadAction<{ board: IBoard; tasks: ITask[] }>) => {
          state.board = action.payload.board;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(patchBoard.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(patchBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(patchBoard.fulfilled, (state, action: PayloadAction<IBoard>) => {
        state.board = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteBoard.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteBoard.fulfilled, (state, action) => {
        state.board = null;
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const BoardReducer = boardSlice.reducer;
