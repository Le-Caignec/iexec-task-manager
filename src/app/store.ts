import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import accountReducer from "../features/account/accountSlice";
import applicationReducer from "../features/application/applicationSlice";
import newTaskReducer from "../features/newTask/newTaskSlice";
import { api } from "./api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    account: accountReducer,
    application: applicationReducer,
    newTask: newTaskReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["account/connect/fulfilled", "account/connect/rejected"],
        ignoredPaths: ["account.iexec"],
      },
    }).concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
