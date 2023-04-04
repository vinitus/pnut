import React from "react";
import MyPageRecipeBlock from "./MyPageRecipeBlock";

const MyPageRecipe = () => {
  const data = [
    {
      imgPath: "/assets/recipe_1.png",
      foodTitle: "닭도리탕",
      id: 1,
    },
    {
      imgPath: "/assets/recipe_1.png",
      foodTitle: "닭도리탕",
      id: 2,
    },
    {
      imgPath: "/assets/recipe_1.png",
      foodTitle: "닭도리탕",
      id: 3,
    },
    {
      imgPath: "/assets/recipe_1.png",
      foodTitle: "닭도리탕",
      id: 4,
    },
  ];

  return (
    <div>
      <div className="flex items-center">
        <p className="text-lg font-extrabold">내가 작성한 레시피</p>
        <p className="font-extrabold text-lg text-#FF6B6C ml-10">13</p>
      </div>
      <div className="flex justify-center py-30">
        <div className="grid grid-cols-3 gap-20 ">
          {data.map((food) => (
            <MyPageRecipeBlock
              imgPath={food.imgPath}
              foodTitle={food.foodTitle}
              key={`${food.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPageRecipe;
