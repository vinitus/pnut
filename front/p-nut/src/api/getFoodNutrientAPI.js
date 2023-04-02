import axios from "axios";

async function getFoodNutrientAPI(userEmail) {
  const response = await axios({
    method: "get",
    baseURL: "http://j8a704.p.ssafy.io:8000/",
    url: "/foods/nutrient",
    params: {
      user_email: userEmail,
    },
  });
  if (response.status === 200) {
    return response.data.data;
  }
  return response.response;
}

export default getFoodNutrientAPI;
