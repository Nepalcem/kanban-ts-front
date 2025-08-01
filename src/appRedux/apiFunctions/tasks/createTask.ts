import axios from "axios";
import { toast } from "react-toastify";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseTask } from "App/AppTypes";
import { taskEndPoint } from "../endPoints";
import { createRequestTimer } from "utils/requestTimer";

const createTask = createAsyncThunk(
  "tasks/create",
  async (task: BaseTask, thunkAPI) => {
    const timer = createRequestTimer();

    try {
      timer.startTimer();
      const response = await axios.post(`${taskEndPoint.BASE_URL}/`, task);
      timer.clearTimer();

      return response.data.result;
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

export default createTask;
