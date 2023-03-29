import { createSlice } from "@reduxjs/toolkit";

import { UIActions } from "./UISlice";
import loginAPI from "../api/loginAPI";
import logoutAPI from "../api/logoutAPI";

const authSlice = createSlice({
  name: "auth",
  initialState: { authentication: { token: "", refreshToken: "", email: "" } },
  reducers: {
    changeAuth(state, action) {
      // console.log("action payload: ", action.payload);
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
      console.log("action payload: ", action.payload);
      state.authentication.token = action.payload;
    },
  },
});

export const updateTokenHandler = (newToken) => {
  console.log("newToken: ", newToken);
  return async (dispatch) => {
    dispatch(authActions.updateToken(newToken));
  };
};

export const loginHandler = (data) => {
  console.log("login handler start");
  return async (dispatch) => {
    try {
      const response = await loginAPI(data.email, data.password);

      if (response.status !== 200) {
        console.log(response);
        throw new Error(response.data.message);
      }

      console.log("loginAPI: ", response.data);

      const userData = {
        token: response.data["access-token"],
        refreshToken: response.data["refresh-token"],
        email: response.data.email,
      };
      console.log("userData: ", userData);

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
      console.log(error);
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

export const logoutHandler = () => {
  console.log("logout handler start");
  return (dispatch) => {
    return new Promise((resolve) => {
      try {
        logoutAPI().then((response) => {
          if (response.status !== 200) {
            throw new Error(response.data.message);
          }

          console.log("logoutAPI: ", response.data);

          dispatch(authActions.logout());

          dispatch(
            UIActions.changeNotification({
              status: "success",
              title: "Success",
              message: "Logout request successed!",
            })
          );

          dispatch(UIActions.resetNotification());
          resolve();
        });
      } catch (error) {
        console.log("logout error: ", error);
        dispatch(
          UIActions.changeNotification({
            status: "error",
            title: "Logout Failed",
            message: "Logout has failed...",
          })
        );
      }
    });
  };
};

export const authActions = authSlice.actions;

export default authSlice;
