import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { taskEndPoint } from "../endPoints";
import { createRequestTimer } from "utils/requestTimer";

const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (_id: string, thunkAPI) => {
    const timer = createRequestTimer();

    try {
      timer.startTimer();
      const response = await axios.delete(`${taskEndPoint.BASE_URL}/${_id}`);
      timer.clearTimer();
      return response.data.updatedBoardTasks;
    } catch (e) {
      timer.clearTimer();
      if (axios.isAxiosError(e)) {
        return thunkAPI.rejectWithValue(e.message);
      } else {
        return thunkAPI.rejectWithValue("An unknown error occurred");
      }
    }
  }
);

export default deleteTask;
