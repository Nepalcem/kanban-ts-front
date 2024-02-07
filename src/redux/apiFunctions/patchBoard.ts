import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IBoard } from "App/AppTypes";
import { boardEndPoint } from "./endPoints";

const patchBoard = createAsyncThunk(
  "board/patchBoard",
  async (board: IBoard, thunkAPI) => {
    const { hashedID, title } = board;
    try {
      const response = await axios.patch(
        `${boardEndPoint}/${hashedID}`,
        { title }
      );
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

export default patchBoard;
