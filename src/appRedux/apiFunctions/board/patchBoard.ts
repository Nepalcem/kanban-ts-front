import axios from "axios";
import { toast } from "react-toastify";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IBoard } from "App/AppTypes";
import { boardEndPoint } from "../endPoints";

const patchBoard = createAsyncThunk(
  "board/patchBoard",
  async (board: IBoard, thunkAPI) => {
    const { hashedID, title } = board;
    try {
      const response = await axios.patch(
        `${boardEndPoint.BASE_URL}/${hashedID}`,
        { title }
      );
      return response.data.board;
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

export default patchBoard;
