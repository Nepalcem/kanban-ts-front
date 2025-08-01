import axios from "axios";
import { toast } from "react-toastify";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IBoard } from "App/AppTypes";
import { boardEndPoint } from "../endPoints";
import { createRequestTimer } from "utils/requestTimer";

const patchBoard = createAsyncThunk(
  "board/patchBoard",
  async (board: IBoard, thunkAPI) => {
    const timer = createRequestTimer();
    const { hashedID, title } = board;

    try {
      timer.startTimer();
      const response = await axios.patch(
        `${boardEndPoint.BASE_URL}/${hashedID}`,
        { title }
      );
      timer.clearTimer();
      return response.data.board;
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

export default patchBoard;
