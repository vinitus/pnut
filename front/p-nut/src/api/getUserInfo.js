import axios from "axios";

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
    baseURL: "http://j8a704.p.ssafy.io:9090/",
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
    method: "get",
    baseURL: "http://j8a704.p.ssafy.io:9090/",
    url: `/users/${email}`,
    headers: {
      "access-token": accessToken,
    },
  });

  if (response.status === 200) {
    return response.data.userInfo;
  }

  return response.response;
}

export default getUserInfo;
