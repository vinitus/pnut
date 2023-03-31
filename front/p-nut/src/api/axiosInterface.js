import axios from "axios";
import store from "../stores";
import { updateTokenHandler } from "../stores/auth";

/** axiosInterface is using axios module.
 * This is just to help easily fetch easly axios's argument.
 * baseurl is fixed. So if you want to change this, you have to change in axiosInterface.
 * method and url are required. And their type is String.
 * data, headers and params, their type is object, they work like data in axios.
 * If axios returned right response, it return common response.
 * If axios raised an error, it return axios error. If you want to get response, you can use key named 'response'.
 */

export default async function axiosInterface(
  method,
  url,
  data = {},
  headers = {},
  params = {}
) {
  // https://soheemon.tistory.com/entry/JavaScript-%EB%B3%B4%EC%95%88%EC%9D%84-%EC%9C%84%ED%95%B4-console-%EB%A1%9C%EA%B7%B8-%EB%A7%89%EA%B8%B0
  // console.log = function () {};
  // console.error = function () {};
  // console.warn = function () {};

  // Authorization Required
  // https://gisastudy.tistory.com/127
  if (headers.Authorization) {
    const myInterceptor = axios.interceptors.response.use(
      (res) => {
        axios.interceptors.response.eject(myInterceptor);
        return res;
      },
      async (err) => {
        console.log("invalid token", err);
        const { config, response } = err;
        const state = JSON.parse(localStorage.getItem("persist:root"));
        const authentication = JSON.parse(state.auth);

        if (response.status === 401) {
          axios.interceptors.response.eject(myInterceptor);

          // Token Refresh
          const refreshResponse = await axios({
            method: "post",
            // baseURL: "http://j8a704.p.ssafy.io:9090/",
            baseURL: "https://pnut.site/api",
            url: "/users/refresh",
            headers: {
              "refresh-token": authentication.authentication.refreshToken,
            },
            data: {
              email: authentication.authentication.email,
            },
          })
            .then((refreshResponse) => refreshResponse)
            .catch((error) => {
              return error;
            });

          if (refreshResponse.status === 200) {
            console.log(
              "new access token: ",
              refreshResponse.data["access-token"]
            );
            const newToken = refreshResponse.data["access-token"];
            config.headers.Authorization = `Bearer ${newToken}`;
            const newResponse = await axios(config);

            store.dispatch(updateTokenHandler(newToken));
            return Promise.resolve(newResponse);
          } else if (
            refreshResponse.response.status === 202 ||
            refreshResponse.response.status === 401
          ) {
            return Promise.reject(refreshResponse);
          }
        }
      }
    );
  }

  // django
  // baseURL: http://j8a704.p.ssafy.io:8000/

  // Authorization Not Required
  let response = await axios({
    method: method,
    url: url,
    // baseURL: "http://j8a704.p.ssafy.io:9090/",
    baseURL: "https://pnut.site/api",
    data: data,
    headers: headers,
    params: params,
  })
    .then((res) => res)
    .catch((err) => {
      return err;
    });

  return response;
}
