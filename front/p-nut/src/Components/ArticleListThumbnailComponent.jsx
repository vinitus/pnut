import React from "react";
import { useNavigate } from "react-router-dom";

const ArticleListThumbnailComponent = (props) => {
  const { rank, imgSrc, title, author, profileImg, articleId } = props;

  const navigate = useNavigate();
  let rankDiv = null;
  if (rank) {
    rankDiv = (
      <div className="absolute -bottom-50 -left-10 text-#F5F5F5 font-semibold text-119 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        {rank}
      </div>
    );
  }

  return (
    <div
      className="h-342"
      onClick={() => {
        window.scrollTo(0, 0);
        navigate(`/board/${articleId}`);
      }}
    >
      <div className="relative">
        <img src={imgSrc} alt="" className="w-390 h-240 rounded-8" />
        {rankDiv && rankDiv}
      </div>
      <div className="font-bold text-22 mt-15 mb-9 ml-20">{title}</div>
      <div className="flex items-center ml-20">
        <img src={profileImg} alt="" className="w-22 h-22" />
        <div className="font-medium text-14 ml-5">{author}</div>
      </div>
    </div>
  );
};

export default ArticleListThumbnailComponent;
