import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { tasksEndPoint } from "../endPoints";

const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (_id: string, thunkAPI) => {
    try {
      const response = await axios.delete(
        `${tasksEndPoint.BASE_LOCAL_URL}/${_id}`
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

export default deleteTask;
