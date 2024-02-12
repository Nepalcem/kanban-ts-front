import axios from "axios";
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
        return thunkAPI.rejectWithValue(e.message);
      } else {
        return thunkAPI.rejectWithValue("An unknown error occurred");
      }
    }
  }
);

export default getBoard;
