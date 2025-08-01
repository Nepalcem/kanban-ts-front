import axios from "axios";
import { toast } from "react-toastify";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { boardEndPoint } from "../endPoints";
import { createRequestTimer } from "utils/requestTimer";

const getBoard = createAsyncThunk(
  "board/getBoard",
  async (hashedID: string, thunkAPI) => {
    const timer = createRequestTimer();

    try {
      timer.startTimer();
      const response = await axios.get(`${boardEndPoint.BASE_URL}/${hashedID}`);
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

export default getBoard;
