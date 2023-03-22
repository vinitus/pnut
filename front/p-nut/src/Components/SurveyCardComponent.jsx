import React, { useState, useEffect } from "react";
import SurveyCardThumbnailComponent from "./SurveyCardThumbnailComponent";

const SurveyCardComponent = props => {
  const data = [
    {
      imgPath: "/assets/samplefoodimg.png",
      foodTitle: "닭도리탕",
      id: 1,
    },
    {
      imgPath: "/assets/samplefoodimg.png",
      foodTitle: "닭도리탕",
      id: 2,
    },
    {
      imgPath: "/assets/samplefoodimg.png",
      foodTitle: "닭도리탕",
      id: 3,
    },
  ];

  const {
    title,
    tag1,
    tag2,
    guidetitle,
    guidecontext,
    nutrienttitle,
    nutrientcontext,
    initialExpanded = false,
    additionalClass = "",
  } = props;

  const [expanded, setExpanded] = useState(initialExpanded);
  const [headerColor, setHeaderColor] = useState("#000");

  const getRandomPastelColor = () => {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 100%, 85%)`;
  };

  useEffect(() => {
    setHeaderColor(getRandomPastelColor());
  }, []);

  return (
    <div
      className={`bg-white w-full ${
        expanded || additionalClass
          ? "rounded-b-lg shadow-md mb-30"
          : "shadow-md"
      }`}
      style={{ transitionDelay: expanded ? "1s" : "0s" }}
    >
      <div
        className="px-40 pt-40 space-y-5 rounded-t-lg cursor-pointer pb-100"
        onClick={() => setExpanded(!expanded)}
        style={{ backgroundColor: headerColor }}
      >
        <p className="text-xl font-extrabold">{title}</p>
        <p className="font-extrabold text-md">{tag1} </p>
        <p className="font-extrabold text-md">{tag2}</p>
      </div>
      <div
        className={` overflow-hidden transition-all ease-in-out duration-1000 space-y-15 pb-20 ${
          expanded ? "max-h-screen " : "max-h-0"
        }`}
      >
        <div className="p-40 space-y-50">
          <section>
            <div className=" space-y-30">
              <img src="public\assets\Improve Guide-1.png" alt="" />
              <p className="text-lg font-bold">
                <strong>01 </strong>
                {guidetitle}
              </p>
              <p className="text-lg">{guidecontext}</p>
            </div>
          </section>
          <section>
            <div className=" space-y-30">
              <img src="public\assets\Improve Guide-2.png" alt="" />
              <p className="text-lg font-bold">
                <strong>01 </strong>
                {nutrienttitle}
              </p>
              <p className="text-lg">{nutrientcontext}</p>
            </div>
          </section>
          <section>
            <img src="public\assets\Improve Guide.png" alt="" />
            <div className="flex px-40 pt-30 space-x-70">
              {data.map(food => (
                <SurveyCardThumbnailComponent
                  imgPath={food.imgPath}
                  foodTitle={food.foodTitle}
                  key={`${food.id}`}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SurveyCardComponent;
