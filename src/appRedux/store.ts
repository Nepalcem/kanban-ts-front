import { configureStore } from "@reduxjs/toolkit";
import { BoardReducer } from "./slices/boardSlice";
import { TasksReducer } from "./slices/tasksSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { IBoardState } from "App/AppTypes";



const authorizePersistConfig = {
  key: "boardData",
  storage,
  whitelist: ["board"],
};

export const store = configureStore({
  reducer: {
    boardData: persistReducer<IBoardState>(
      authorizePersistConfig,
      BoardReducer
    ),
    tasks: TasksReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
