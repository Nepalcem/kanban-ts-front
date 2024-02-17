import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { IBoard } from "App/AppTypes";
import { boardEndPoint } from "../endPoints";

const createBoard = createAsyncThunk(
  "board/create",
  async (board: IBoard, thunkAPI) => {
    try {
      const response = await axios.post(`${boardEndPoint.BASE_URL}/`, board);
      return response.data.board;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        toast.error(e.response?.data.message);
        return thunkAPI.rejectWithValue(e.message);
      } else {
        return thunkAPI.rejectWithValue("An unknown error occurred");
      }
    }
  }
);

export default createBoard;
