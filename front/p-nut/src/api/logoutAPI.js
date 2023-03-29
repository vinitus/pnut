// import axiosInterface from "./axiosInterface";
import axios from "axios";

/*
Request needs access-token in the header
Check if the token is valid before logout request
If the token is not valid, refresh the token
*/

async function logoutAPI() {
  const state = JSON.parse(localStorage.getItem("persist:root"));
  console.log("state: ", state);
  const authentication = JSON.parse(state.auth);
  let accessToken = authentication.authentication.token;
  const { refreshToken } = authentication.authentication;
  const { email } = authentication.authentication;
  console.log("logout");
  const checkResponse = await axios({
    method: "post",
    baseURL: "http://j8a704.p.ssafy.io:9090/",
    url: "/users/check",
    headers: {
      "access-token": accessToken,
    },
  });

  console.log("checkResposne: ", checkResponse);
  if (checkResponse.status === 202) {
    const refreshResponse = await axios({
      method: "post",
      baseURL: "http://j8a704.p.ssafy.io:9090/",
      url: "/users/refresh",
      headers: {
        "refresh-token": refreshToken,
      },
      data: {
        email: email,
      },
    });
    console.log("refreshResponse: ", refreshResponse);
    accessToken = refreshResponse.data["access-token"];
  }
  const response = await axios({
    method: "post",
    baseURL: "http://j8a704.p.ssafy.io:9090/",
    url: "/users/logout",
    headers: {
      "access-token": accessToken,
    },
  });

  console.log("logout response: ", response);
  if (response.status === 200) {
    return response;
  }

  return response.response;
}

export default logoutAPI;
