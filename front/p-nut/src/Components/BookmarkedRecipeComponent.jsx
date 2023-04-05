import React, { useState } from "react";

const BookmarkedRecipeComponent = (props) => {
  const {
    imgPath,
    foodTitle,
    profileImgPath,
    profileUser,
    likes,
    views,
    comments,
  } = props;

  const [isHovering, setIsHovering] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="mb-10">
      <div
        className="relative inline-block"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <img className="object-cover shadow-md w-250" src={imgPath} alt="" />
        {isHovering && (
          <div>
            <div
              onClick={handleFavoriteClick}
              className="absolute inset-0 z-40 flex items-center justify-center w-full h-full rounded-10 bg-gray-800/50"
            >
              <img
                className={`h-40 cursor-pointer transition-transform duration-500 ${
                  isFavorite ? "scale-125" : ""
                }`}
                src={
                  isFavorite
                    ? "public/assets/HeartFilled.png"
                    : "public/assets/HeartEmpty.png"
                }
                alt=""
              />
            </div>
            <div className="absolute inset-0 flex items-end m-5">
              <div className="z-50 flex items-center space-x-5 text-sm text-white">
                <img className="h-20" src="assets/Favorite.png" alt="" />
                {likes} |
                <img className="h-20" src="assets\Invisible.png" alt="" />
                {views} |
                <img className="h-20" src="assets\Comments.png" alt="" />
                {comments}개
              </div>
            </div>
          </div>
        )}
      </div>
      <p className="mb-10 text-lg font-bold">{foodTitle}</p>
      <div className="flex items-center space-x-10 font-semibold">
        <img className="h-30" src={profileImgPath} alt="" />
        <p>{profileUser}</p>
      </div>
    </div>
  );
};

export default BookmarkedRecipeComponent;
