import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createBoard, getBoard, patchBoard, deleteBoard } from "../apiFunctions";
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
      .addCase(createBoard.pending, (state, action) => {})
      .addCase(createBoard.rejected, (state, action) => {})
      .addCase(createBoard.fulfilled, (state, action) => {
        state.board = action.payload.board;
      })
      .addCase(getBoard.pending, (state, action) => {})
      .addCase(getBoard.rejected, (state, action) => {})
      .addCase(getBoard.fulfilled, (state, action) => {
        state.board = action.payload.board;
      })
      .addCase(patchBoard.pending, (state, action) => {})
      .addCase(patchBoard.rejected, (state, action) => {})
      .addCase(patchBoard.fulfilled, (state, action) => {
        state.board = action.payload.board;
      })
      .addCase(deleteBoard.pending, (state, action) => {})
      .addCase(deleteBoard.rejected, (state, action) => {})
      .addCase(deleteBoard.fulfilled, (state, action) => {
        state.board = action.payload.board;
      });
  },
});

export const BoardReducer = boardSlice.reducer;
