import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITask } from "App/AppTypes";
import { tasksEndPoint } from "../endPoints";

const patchTask = createAsyncThunk(
  "tasks/patchTask",
  async (task: ITask, thunkAPI) => {
    const { _id, title, description, status } = task;
    try {
      const response = await axios.patch(
        `${tasksEndPoint.BASE_LOCAL_URL}/${_id}`,
        { title, description, status }
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

export default patchTask;
