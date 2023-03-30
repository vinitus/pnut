import React, { useState } from "react";
import Modal from "../UI/Modal";
import axios from "axios";
// import dotenv from "dotenv";

const RecipeThumbnailComponent = (props) => {
  const { imgPath, title, kcal, mainIngredients, time, id } = props;

  // open일 떄 true로 만들어 열림
  const [modalOpen, setModalOpen] = useState(false);
  const [ data, setData] = useState() ;
  // youtube api key
  //require("dotenv").config();
  //const key = process.env.YOUTUBE_KEY;
  
  const openModal = (event) => {
    event.stopPropagation();
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${title}&type=video&videoDefinition=high&key=${key}`
      )
      .then((res)=>{
        setData(res.data.items);
      })
      .catch(()=>{});
    setModalOpen(true);
  };
  const closeModal = (event) => {
    event.stopPropagation();
    setModalOpen(false);
  };
    

  return (
    <div>
      {modalOpen && <Modal open={modalOpen} close={closeModal} foodId={id} foodTitle={title} searchResult={data}>
        어쩌구저쩌구
      </Modal>}
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
