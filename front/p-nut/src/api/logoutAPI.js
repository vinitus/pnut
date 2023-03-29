// import axiosInterface from "./axiosInterface";
import axios from "axios";

/*
Request needs access-token in the header
*/

async function logoutAPI() {
  const state = JSON.parse(localStorage.getItem("persist:root"));
  console.log("state: ", state);
  const authentication = JSON.parse(state.auth);
  const accessToken = authentication.authentication.token;
  console.log("logout");
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
