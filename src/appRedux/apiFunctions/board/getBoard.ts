import axios from "axios";
import { toast } from "react-toastify";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { boardEndPoint } from "../endPoints";

const getBoard = createAsyncThunk(
  "board/getBoard",
  async (hashedID: string, thunkAPI) => {
    try {
      const response = await axios.get(`${boardEndPoint.BASE_URL}/${hashedID}`);
      return response.data;
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

export default getBoard;
