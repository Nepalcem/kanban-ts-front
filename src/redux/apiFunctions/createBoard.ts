import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IBoard } from "App/AppTypes";
import { boardEndPoint } from "./endPoints";

const createBoard = createAsyncThunk(
  "board/create",
  async (board: IBoard, thunkAPI) => {
    try {
      const response = await axios.post(`${boardEndPoint}/`, board);
      return response.data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        return thunkAPI.rejectWithValue(e.message);
      } else {
        return thunkAPI.rejectWithValue("An unknown error occurred");
      }
    }
  }
);

export default createBoard;