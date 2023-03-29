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
  return response;
}

export default loginAPI;
