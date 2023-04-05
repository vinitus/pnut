import React from "react";
import BookmarkedRecipeComponent from "./BookmarkedRecipeComponent";

const BookmarkedRecipe = () => {
  const data = [
    {
      imgPath: "/assets/recipe_1.png",
      foodTitle: "올리브 치아바타",
      profileImgPath: "/assets/profileimage.png",
      profileUser: "콩이",
      likes: "143",
      views: "30.8",
      comments: "38",
      id: 1,
    },
    {
      imgPath: "/assets/recipe_1.png",
      foodTitle: "올리브 치아바타",
      profileImgPath: "/assets/profileimage.png",
      profileUser: "콩이",
      likes: "143",
      views: "30.8",
      comments: "38",
      id: 2,
    },
    {
      imgPath: "/assets/recipe_1.png",
      foodTitle: "올리브 치아바타",
      profileImgPath: "/assets/profileimage.png",
      profileUser: "콩이",
      likes: "143",
      views: "30.8",
      comments: "38",
      id: 3,
    },
    {
      imgPath: "/assets/recipe_1.png",
      foodTitle: "올리브 치아바타",
      profileImgPath: "/assets/profileimage.png",
      profileUser: "콩이",
      likes: "143",
      views: "30.8",
      comments: "38",
      id: 4,
    },
    {
      imgPath: "/assets/recipe_1.png",
      foodTitle: "올리브 치아바타",
      profileImgPath: "/assets/profileimage.png",
      profileUser: "콩이",
      likes: "143",
      views: "30.8",
      comments: "38",
      id: 5,
    },
    {
      imgPath: "/assets/recipe_1.png",
      foodTitle: "올리브 치아바타",
      profileImgPath: "/assets/profileimage.png",
      profileUser: "콩이",
      likes: "143",
      views: "30.8",
      comments: "38",
      id: 6,
    },
    {
      imgPath: "/assets/recipe_1.png",
      foodTitle: "올리브 치아바타",
      profileImgPath: "/assets/profileimage.png",
      profileUser: "콩이",
      likes: "143",
      views: "30.8",
      comments: "38",
      id: 7,
    },
  ];

  return (
    <div>
      <div className="flex items-center">
        <p className="text-lg font-extrabold">북마크한 레시피</p>
        <p className="font-extrabold text-lg text-#FF6B6C ml-10">13</p>
      </div>
      <div className="flex justify-center py-30">
        <div className="grid grid-cols-3 gap-20 ">
          {data.map((food) => (
            <BookmarkedRecipeComponent
              imgPath={food.imgPath}
              foodTitle={food.foodTitle}
              profileImgPath={food.profileImgPath}
              profileUser={food.profileUser}
              likes={food.likes}
              views={food.views}
              comments={food.comments}
              key={`${food.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookmarkedRecipe;
