import axios from "axios";

export default async function djangoAPI(
  method,
  url,
  params = {},
  data = {},
  headers = {}
) {
  // const baseURL = "http://j8a704.p.ssafy.io:8000";
   const baseURL = "https://pnut.site";
  // django
  // Authorization Not Required
  let response = await axios({
    method: method,
    url: url,
    baseURL: baseURL,
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
