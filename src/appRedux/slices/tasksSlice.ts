import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask, ITaskState } from "App/AppTypes";
import { createTask, patchTask, deleteTask } from "appRedux/apiFunctions";

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
        state.error = action.payload as string;
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
        state.error = action.payload as string;
      })
      .addCase(patchTask.fulfilled, (state, action: PayloadAction<ITask[]>) => {
        state.isTaskLoading = false;
        state.error = null;
        state.tasks = action.payload;
      })
      .addCase(deleteTask.pending, (state, action) => {
        state.isTaskLoading = true;
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.isTaskLoading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteTask.fulfilled, (state, action: PayloadAction<ITask[]>) => {
        state.isTaskLoading = false;
        state.error = null;
        state.tasks = action.payload;
      });
  },
});

export const { getTasks } = tasksSlice.actions;
export const TasksReducer = tasksSlice.reducer;