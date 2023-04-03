import React from "react";
import RecipeThumbnailComponent from "../Components/RecipeThumbnailComponent";

const SymptomsRecommandPage = () => {
  const btnIcons = [
    {
      imgPath: "/assets/cate_all.png",
      title: "전체",
    },
    {
      imgPath: "/assets/cate_mind.png",
      title: "마음",
    },

    {
      imgPath: "/assets/cate_skin.png",
      title: "피부",
    },

    {
      imgPath: "/assets/cate_teeth.png",
      title: "구강관리",
    },

    {
      imgPath: "/assets/cate_diet.png",
      title: "다이어트",
    },

    {
      imgPath: "/assets/cate_bone.png",
      title: "뼈/관절",
    },

    {
      imgPath: "/assets/cate_power.png",
      title: "피로/활력",
    },

    {
      imgPath: "/assets/cate_liver.png",
      title: "간 건강",
    },

    {
      imgPath: "/assets/cate_organ.png",
      title: "장 건강",
    },
    {
      imgPath: "/assets/cate_hair.png",
      title: "모발/두피",
    },

    {
      imgPath: "/assets/cate_stomach.png",
      title: "위/소화",
    },

    {
      imgPath: "/assets/cate_immune.png",
      title: "면역력",
    },
  ];
  const dummyData = [
    {
      imgPath: "/assets/chicken.png",
      title: "닭도리탕",
      kcal: 356,
      mainIngredients: ["닭", "감자", "양파", "파"],
      time: 30,
      id: 1,
    },
    {
      imgPath: "/assets/chicken.png",
      title: "닭도리탕",
      kcal: 356,
      mainIngredients: ["닭", "감자", "양파", "파"],
      time: 30,
      id: 2,
    },
    {
      imgPath: "/assets/chicken.png",
      title: "닭도리탕",
      kcal: 356,
      mainIngredients: ["닭", "감자", "양파", "파"],
      time: 30,
      id: 3,
    },
    {
      imgPath: "/assets/chicken.png",
      title: "닭도리탕",
      kcal: 356,
      mainIngredients: ["닭", "감자", "양파", "파"],
      time: 30,
      id: 4,
    },
    {
      imgPath: "/assets/chicken.png",
      title: "닭도리탕",
      kcal: 356,
      mainIngredients: ["닭", "감자", "양파", "파"],
      time: 30,
      id: 5,
    },
    {
      imgPath: "/assets/chicken.png",
      title: "닭도리탕",
      kcal: 356,
      mainIngredients: ["닭", "감자", "양파", "파"],
      time: 30,
      id: 6,
    },
    {
      imgPath: "/assets/chicken.png",
      title: "닭도리탕",
      kcal: 356,
      mainIngredients: ["닭", "감자", "양파", "파"],
      time: 30,
      id: 7,
    },
    {
      imgPath: "/assets/chicken.png",
      title: "닭도리탕",
      kcal: 356,
      mainIngredients: ["닭", "감자", "양파", "파"],
      time: 30,
      id: 8,
    },
    {
      imgPath: "/assets/chicken.png",
      title: "닭도리탕",
      kcal: 356,
      mainIngredients: ["닭", "감자", "양파", "파"],
      time: 30,
      id: 9,
    },
    {
      imgPath: "/assets/chicken.png",
      title: "닭도리탕",
      kcal: 356,
      mainIngredients: ["닭", "감자", "양파", "파"],
      time: 30,
      id: 10,
    },
    {
      imgPath: "/assets/chicken.png",
      title: "닭도리탕",
      kcal: 356,
      mainIngredients: ["닭", "감자", "양파", "파"],
      time: 30,
      id: 11,
    },
    {
      imgPath: "/assets/chicken.png",
      title: "닭도리탕",
      kcal: 356,
      mainIngredients: ["닭", "감자", "양파", "파"],
      time: 30,
      id: 12,
    },
  ];

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center py-100">
        <div className="text-4xl font-bold">
          고민이 있으신가요? <strong className=" text-#FF6B6C ">피넛</strong>
          에게 물어보세요!
        </div>
        <div className="text-xl text-#AEAFAE pt-10">
          궁금한 카테고리를 선택하면 증상별로 맞춤 음식을 볼 수 있어요
        </div>
      </div>
      <hr className="" />
      <div className="flex">
        {btnIcons.map((values, index) => (
          <div
            className="flex flex-col items-center justify-center mx-14"
            key={`symptoms${index}`}
          >
            <div className="rounded-25 bg-#535453/20 w-72 h-72 flex items-center justify-center">
              <img src={values.imgPath} alt="" />
            </div>
            <div>{values.title}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-56 w-1248">
        {dummyData.map((value) => (
          <RecipeThumbnailComponent
            imgPath={value.imgPath}
            title={value.title}
            kcal={value.kcal}
            mainIngredients={value.mainIngredients}
            time={value.time}
            id={25}
            key={`${value.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SymptomsRecommandPage;
