import axios from "axios";

async function foodTestAPI(foodId, userEmail) {
  const response = await axios({
    method: "get",
    // baseURL: "http://j8a704.p.ssafy.io:8000/",
    baseURL: "https://pnut.site/api",
    url: "/foods/info",
    params: {
      food_id: foodId,
      user_email: userEmail,
    },
  });
  if (response.status === 200) {
    return response;
  }
  return response.response;
}

export default foodTestAPI;
