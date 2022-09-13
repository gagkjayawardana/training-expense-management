import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";
import expenseReducer from "../slice/expenseSlice";
import createSagaMiddleware from "redux-saga";
import userSaga from "../saga/userSaga";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    userReducer: userReducer,
    expenseReducer: expenseReducer,
  },
  middleware: [saga],
});

saga.run(userSaga);

export default store;