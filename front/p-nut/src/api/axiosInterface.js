import axios from "axios";

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
  console.log = function () {};
  console.error = function () {};
  console.warn = function () {};

  // authorization이 필요한 요청인 경우
  // https://gisastudy.tistory.com/127
  if (headers.Authorization) {
    const myInterceptor = axios.interceptors.response.use(
      (res) => {
        axios.interceptors.response.eject(myInterceptor);
        console.log(res);
        return res;
      },
      async (err) => {
        console.log("err");
        const { config } = err;
        const responseData = err.response;
        const state = JSON.parse(localStorage.getItem("persist:root"));
        const authentication = JSON.parse(state.auth);

        if (responseData.data.msg === "Login Require") {
          axios.interceptors.response.eject(myInterceptor);

          // token refresh
          const refreshResponse = await axios({
            method: "post",
            baseURL: "http://j8a704.p.ssafy.io",
            url: "",
            data: {
              grantType: "Bearer",
              accessToken: authentication.authentication.token,
              refreshToken: authentication.authentication.refreshToken,
            },
          })
            .then((refreshResponse) => refreshResponse)
            .catch((error) => {
              return error;
            });

          console.log(refreshResponse);

          if (refreshResponse.status === 200) {
            config.headers.Authorization = `Bearer ${refreshResponse.data.accessToken}`;
            const data2 = await axios(config);
            data2.newToken = refreshResponse.data.accessToken;

            return Promise.resolve(data2);
          } else if (refreshResponse.response.status === 307) {
            return Promise.reject(refreshResponse);
          }
        }
      }
    );
  }

  // authorization 검증이 필요하지 않은 경우
  let response = await axios({
    method: method,
    url: url,
    baseURL: "http://j8a704.p.ssafy.io",
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
