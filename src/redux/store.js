import { combineReducers, configureStore } from "@reduxjs/toolkit"
import authSlice from "./slices/authSlice";
import customerSlice from "./slices/customerSlice";

const reducer = combineReducers({
  auth: authSlice,
  customer: customerSlice
})

const store = configureStore({
  reducer
});

export default store