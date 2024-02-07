import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IBoard } from "App/AppTypes";
import { boardEndPoint } from "./endPoints";

const deleteBoard = createAsyncThunk(
  "board/deleteBoard",
  async (board: IBoard, thunkAPI) => {
    const { hashedID } = board;
    try {
      const response = await axios.delete(`${boardEndPoint}/${hashedID}`);
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

export default deleteBoard;
