import axios from "axios";

async function getSymptomsCategoryAPI(symptomsId) {
  const response = await axios({
    method: "get",
    baseURL: "http://j8a704.p.ssafy.io:8000/",
    url: `/foods/symptom/${symptomsId}`,
  });
  if (response.status === 200) {
    return response.data.data;
  }
  return response.response;
}

export default getSymptomsCategoryAPI;
