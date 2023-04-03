import React, { useState, useEffect } from "react";
import Modal from "../UI/Modal";
import axios from "axios";
import foodTestAPI from "../api/foodTestAPI";
// import dotenv from "dotenv";

const RecipeThumbnailComponent = (props) => {
  const { imgPath, title, kcal, mainIngredients, time, id } = props;

  // youtubeData가 존재하면 true로 만들어 열림
  const [youtubeData, setYoutubeData] = useState();
  const [foodData, setFoodData] = useState(null);
  // youtube api key
  // require("dotenv").config();
  // const key = process.env.YOUTUBE_KEY;

  // FoodTestAPI를 위한 userEmail 가져오기
  const state = JSON.parse(localStorage.getItem("persist:root"));
  const authentication = JSON.parse(state.auth);
  const userEmail = authentication.authentication.email;

  const openModal = (event) => {
    event.stopPropagation();
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${title}레시피&type=video&videoDefinition=high&key=AIzaSyCI8t8M1ADPjcTTAuIOs3G2w-Nev9hXwRs`
      )
      .then((res) => {
        setYoutubeData(res.data.items);
      })

      .catch((err) => {
        console.log("youtube error: ", err);
      });
  };

  // FoodTestAPI
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

  const closeModal = (event) => {
    event.stopPropagation();
    setYoutubeData(null);
    setFoodData(null);
  };

  return (
    <div>
      {youtubeData && (
        <Modal close={closeModal} searchResult={youtubeData} food={foodData} />
      )}
      <img
        className="cursor-pointer"
        onClick={openModal}
        src={imgPath}
        alt=""
      />
      <div className="flex items-end my-10 space-x-5 text-end">
        <p className="text-xl font-bold">{title}</p>
        <p className="bg-#FF6B6C/70 text-end text-white px-10 py-3 rounded-full">
          {kcal} kcal
        </p>
      </div>
      <div className="text-lg text-gray-700">주 재료 : {mainIngredients}</div>
      <div className="text-lg text-gray-700">예상 조리시간 : {time}분</div>
    </div>
  );
};

export default RecipeThumbnailComponent;
