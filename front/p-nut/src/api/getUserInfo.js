import axios from "axios";
import store from "../stores";
import { removeTokenHandler } from "../stores/auth";

async function getUserInfo() {
  const state = JSON.parse(localStorage.getItem("persist:root"));
  const authentication = JSON.parse(state.auth);
  let accessToken = authentication.authentication.token;
  const { refreshToken } = authentication.authentication;
  const { email } = authentication.authentication;
  console.log("refreshToken: ", refreshToken);
  console.log("email: ", email);
  const checkResponse = await axios({
    method: "post",
    baseURL: "https://pnut.site/api",
    url: "/users/check",
    headers: {
      "access-token": accessToken,
      // "access-token": "asdasd",
    },
  });
  console.log("checkResponse: ", checkResponse);
  if (checkResponse.status === 202) {
    const refreshResponse = await axios({
      method: "post",
      baseURL: "https://pnut.site/api",
      url: "/users/refresh",
      headers: {
        "refresh-token": refreshToken,
      },
      data: {
        email: email,
      },
    });
    console.log("refreshResponse: ", refreshResponse);
    if (refreshResponse.status === 200) {
      accessToken = refreshResponse.data["access-token"];

      console.log("response1");
      const response1 = await axios({
        method: "get",
        baseURL: "https://pnut.site/api",
        url: `/users/${email}`,
        headers: {
          "access-token": accessToken,
        },
      });

      if (response1.status === 200) {
        return response1.data.userInfo;
      }
      return response1.response;
    }
    if (refreshResponse.status === 202) {
      console.log("refreshResponse 202");
      store.dispatch(removeTokenHandler());
      return refreshResponse;
    }
  } else {
    console.log("response2");
    const response2 = await axios({
      method: "get",
      baseURL: "https://pnut.site/api",
      url: `/users/${email}`,
      headers: {
        "access-token": accessToken,
      },
    });

    if (response2.status === 200) {
      return response2.data.userInfo;
    }
    return response2.response;
  }
}

export default getUserInfo;
