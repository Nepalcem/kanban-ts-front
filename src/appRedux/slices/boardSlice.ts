import { createSlice } from "@reduxjs/toolkit";
import {
  createBoard,
  getBoard,
  patchBoard,
  deleteBoard,
} from "../apiFunctions";
import { IBoardState } from "App/AppTypes";

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
      })
      .addCase(createBoard.fulfilled, (state, action) => {
        state.board = action.payload.board;
        state.isLoading = false;
      })
      .addCase(getBoard.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getBoard.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getBoard.fulfilled, (state, action) => {
        state.board = action.payload.board;
        state.isLoading = false;
      })
      .addCase(patchBoard.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(patchBoard.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(patchBoard.fulfilled, (state, action) => {
        state.board = action.payload.board;
        state.isLoading = false;
      })
      .addCase(deleteBoard.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteBoard.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteBoard.fulfilled, (state, action) => {
        state.board = null;
        state.isLoading = false;
      });
  },
});

export const BoardReducer = boardSlice.reducer;
