import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createTask, patchTask, deleteTask } from "appRedux/apiFunctions";
import { ITask, ITaskState } from "App/AppTypes";

const tasksInitialState: ITaskState = {
  tasks: [],
  isTaskLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    getTasks(state, action: PayloadAction<ITask[]>) {
      state.tasks = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTask.pending, (state, action) => {
        state.isTaskLoading = true;
      })
      .addCase(createTask.rejected, (state, action) => {
        state.isTaskLoading = false;
        state.error =
          action.payload instanceof Error
            ? action.payload.message
            : "Unknown error";
      })
      .addCase(createTask.fulfilled, (state, action: PayloadAction<ITask>) => {
        state.isTaskLoading = false;
        state.error = null;
        state.tasks = [...state.tasks, action.payload];
      })
      .addCase(patchTask.pending, (state, action) => {
        state.isTaskLoading = true;
      })
      .addCase(patchTask.rejected, (state, action) => {
        state.isTaskLoading = false;
        state.error =
          action.payload instanceof Error
            ? action.payload.message
            : "Unknown error";
      })
      .addCase(patchTask.fulfilled, (state, action: PayloadAction<ITask>) => {
        state.isTaskLoading = false;
        state.error = null;
        state.tasks = [...state.tasks, action.payload];
      })
      .addCase(deleteTask.pending, (state, action) => {
        state.isTaskLoading = true;
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.isTaskLoading = false;
        state.error =
          action.payload instanceof Error
            ? action.payload.message
            : "Unknown error";
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isTaskLoading = false;
        state.error = null;
        state.tasks = state.tasks.filter((el) => el._id !== action.payload._id);
      });
  },
});

export const { getTasks } = tasksSlice.actions;
export const TasksReducer = tasksSlice.reducer;
