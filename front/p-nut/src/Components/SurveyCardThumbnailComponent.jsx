import React, { useState, useEffect } from "react";
import Modal from "../UI/Modal";
import axios from "axios";
import foodTestAPI from "../api/foodTestAPI";

const foodTest = async (foodId, userEmail) => {
  try {
    const response = await foodTestAPI(foodId, userEmail);
    console.log("Test response: ", response.data.data);
    return response.data.data;
  } catch (err) {
    console.log("error : ", err);
    return null;
  }
};

const SurveyCardThumbnailComponent = (props) => {
  const { imgPath, foodTitle, foodId } = props;

  const [youtubeData, setYoutubeData] = useState();
  const [foodData, setFoodData] = useState(null);

  console.log("foodId: ", foodId);

  // FoodTestAPI를 위한 userEmail 가져오기
  const state = JSON.parse(localStorage.getItem("persist:root"));
  const authentication = JSON.parse(state.auth);
  const userEmail = authentication.authentication.email;

  const foodTest = async () => {
    try {
      // foodID 바꾸기
      const response = await foodTestAPI(foodId, userEmail);
      console.log("Test response: ", response.data.data);

      setFoodData(response.data.data);
    } catch (err) {
      console.log("error: ", err);
    }
  };

  useEffect(() => {
    foodTest();
  }, []);

  const openModal = (event) => {
    event.stopPropagation();
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${foodTitle}레시피&type=video&videoDefinition=high&key=AIzaSyCI8t8M1ADPjcTTAuIOs3G2w-Nev9hXwRs`
      )
      .then((res) => {
        setYoutubeData(res.data.items);
      })

      .catch((err) => {
        console.log("youtube error: ", err);
      });
  };

  const closeModal = (event) => {
    event.stopPropagation();
    setYoutubeData(null);
    setFoodData(null);
  };

  return (
    <div className="flex flex-col justify-center">
      {youtubeData && (
        <Modal
          close={closeModal}
          searchResult={youtubeData}
          food={foodData}
        ></Modal>
      )}
      <button type="button" onClick={openModal}>
        <img className="h-150 w-150 rounded-full" src={imgPath} alt="" />
        <br />
        <p className="text-lg text-center font-extrabold"> {foodTitle} </p>
      </button>
    </div>
  );
};

export default SurveyCardThumbnailComponent;
