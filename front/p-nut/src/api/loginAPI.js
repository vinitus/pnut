// import axiosInterface from "./axiosInterface";
import axios from "axios";

/*
Request needs email, password
*/

async function loginAPI(email, password) {
  const response = await axios({
    method: "post",
    baseURL: "http://j8a704.p.ssafy.io:9090/",
    url: "/users/login",
    data: {
      email: email,
      password: password,
    },
  });
  if (response.status === 200) {
    return response;
  }

  return response.response;
}

export default loginAPI;
