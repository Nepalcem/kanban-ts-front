import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITask } from "App/AppTypes";
import { taskEndPoint } from "../endPoints";

const patchTask = createAsyncThunk(
  "tasks/patchTask",
  async (task: ITask, thunkAPI) => {
    const { _id, title, description, status, owner, columnIndex } = task;
    try {
      const response = await axios.patch(`${taskEndPoint.BASE_URL}/${_id}`, {
        title,
        description,
        status,
        columnIndex,
        owner,
      });
      return response.data.tasks;
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
