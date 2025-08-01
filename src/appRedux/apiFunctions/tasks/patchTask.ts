import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITask } from "App/AppTypes";
import { taskEndPoint } from "../endPoints";
import { createRequestTimer } from "utils/requestTimer";

const patchTask = createAsyncThunk(
  "tasks/patchTask",
  async (task: ITask, thunkAPI) => {
    const timer = createRequestTimer();
    const { _id, title, description, status, owner, columnIndex } = task;

    try {
      timer.startTimer();
      const response = await axios.patch(`${taskEndPoint.BASE_URL}/${_id}`, {
        title,
        description,
        status,
        columnIndex,
        owner,
      });
      timer.clearTimer();
      return response.data.tasks;
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

export default patchTask;
