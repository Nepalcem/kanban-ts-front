import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { IBoard } from "App/AppTypes";
import { boardEndPoint } from "../endPoints";
import { createRequestTimer } from "utils/requestTimer";

const createBoard = createAsyncThunk(
  "board/create",
  async (board: IBoard, thunkAPI) => {
    const timer = createRequestTimer();

    try {
      timer.startTimer();
      const response = await axios.post(`${boardEndPoint.BASE_URL}/`, board);
      timer.clearTimer();
      return response.data;
    } catch (e) {
      timer.clearTimer();
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
