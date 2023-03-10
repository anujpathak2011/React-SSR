import { createSlice } from '@reduxjs/toolkit';

const name = 'auth';
const authSlice = createSlice({
  name,
  initialState: { user: null },
  reducers: {
    login: (_state, action) => {
     return { user: action.payload}
    },
    logout: state => {
      return {...state, user: null}
    },
    loginRequest: (state, action) => {
      return {...state, request: action.payload}
    }
  },
});

export const { login, loginRequest, logout } = authSlice.actions;

export default authSlice.reducer;

