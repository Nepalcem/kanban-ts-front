import axios from "axios";
import { toast } from "react-toastify";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseTask } from "App/AppTypes";
import { taskEndPoint } from "../endPoints";

const createTask = createAsyncThunk(
  "tasks/create",
  async (task: BaseTask, thunkAPI) => {
    try {
      const response = await axios.post(`${taskEndPoint.BASE_URL}/`, task);

      return response.data.result;
    } catch (e) {
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
