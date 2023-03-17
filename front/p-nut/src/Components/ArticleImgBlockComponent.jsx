import React from "react";

const ArticleImgBlockComponent = (props) => {
  const { size, text } = props;

  return (
    <div
      className={`bg-#F5F5F5 flex items-center justify-center flex-col grey-underbar ${size}`}
    >
      <img src="./assets/plus.png" alt="plus" />
      <div className="mt-20 text-2xl">{text}</div>
    </div>
  );
};

export default ArticleImgBlockComponent;
