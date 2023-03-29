import React from "react";

const SurveyCardThumbnailComponent = props => {
  const { imgPath, foodTitle } = props;

  return (
    <div className="flex flex-col justify-center">
      <img className="h-150 w-150 " src={imgPath} alt="" />
      <br />
      <p className="text-lg text-center font-extrabold"> {foodTitle} </p>
    </div>
  );
};

export default SurveyCardThumbnailComponent;
