import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { boardEndPoint } from "../endPoints";

const deleteBoard = createAsyncThunk(
  "board/deleteBoard",
  async (hashedID: string, thunkAPI) => {
    try {
      const response = await axios.delete(
        `${boardEndPoint.BASE_URL}/${hashedID}`
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

export default deleteBoard;
