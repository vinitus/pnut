import React from "react";

const RecipeThumbnailComponent = (props) => {
  const { imgPath, title, kcal, mainIngredients, time } = props;
  return (
    <div className="">
      <img src={imgPath} alt="" />
      <div className="my-10 flex items-end text-end space-x-5">
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
