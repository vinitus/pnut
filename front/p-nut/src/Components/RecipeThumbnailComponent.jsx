import React from "react";

const RecipeThumbnailComponent = (props) => {
  const { imgPath, title, kcal, mainIngredients, time } = props;
  return (
    <div className="">
      <img src={imgPath} alt="" />
      <div>
        <div>{title}</div>
        <div>{kcal}</div>
      </div>
      <div>{mainIngredients}</div>
      <div>{time}</div>
    </div>
  );
};

export default RecipeThumbnailComponent;
