import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITask } from "App/AppTypes";
import { tasksEndPoint } from "../endPoints";

const createTask = createAsyncThunk(
  "tasks/create",
  async (task: ITask, thunkAPI) => {
    try {
      const response = await axios.post(
        `${tasksEndPoint.BASE_LOCAL_URL}/`,
        task
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

export default createTask;
