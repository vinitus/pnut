// import axiosInterface from "./axiosInterface";
import axios from "axios";

/*
Request needs email, password
*/

async function loginAPI(email, password) {
  const response = await axios({
    method: "post",
    baseURL: "https://pnut.site/api",
    url: "/users/login",
    data: {
      email: email,
      password: password,
    },
  });
  return response;
}

export default loginAPI;
