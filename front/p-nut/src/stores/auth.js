import { createSlice } from "@reduxjs/toolkit";

import { UIActions } from "./UISlice";
import loginAPI from "../api/loginAPI";

const authSlice = createSlice({
  name: "auth",
  initialState: { authentication: { token: "", refreshToken: "", email: "" } },
  reducers: {
    changeAuth(state, action) {
      state.authentication = {
        token: action.payload.token,
        refreshToken: action.payload.refreshToken,
        email: action.payload.email,
      };
    },
    logout(state) {
      state.authentication = {
        token: "",
        refreshToken: "",
        email: "",
      };
    },
    updateToken(state, action) {
      state.authentication.token = action.payload;
    },
  },
});

export const loginHandler = (data) => {
  return async (dispatch) => {
    try {
      const response = await loginAPI(data.email, data.password);

      if (response.status !== 200) {
        console.log(response);
        throw new Error(response.data.message);
      }

      const userData = {
        token: response.data.accessToken,
        refreshToken: response.data.refreshToken,
        email: data.email,
      };

      dispatch(authActions.changeAuth(userData));

      dispatch(
        UIActions.changeNotification({
          status: "success",
          title: "Success",
          message: "Login request successed!",
        })
      );

      dispatch(UIActions.resetNotification());
    } catch (error) {
      dispatch(
        UIActions.changeNotification({
          status: "error",
          title: "Login Failed",
          message: "Login has failed...",
        })
      );
    }
  };
};

export const authActions = authSlice.actions;

export default authSlice;
