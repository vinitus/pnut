import React from "react";

const CommentForm = (props) => {
  const { content, nickName, date } = props;
  const yyyymmdd = date.split("T")[0];
  console.log(yyyymmdd);

  return (
    <div className="my-15 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center">
        <div className="bg-#AEAFAE h-73 w-73 rounded-50 overflow-hidden bg-[url('/assets/profileimage.png')] bg-cover" />
        <div className="text-28 font-bold ml-14 mr-34">{nickName}</div>
        <div className="text-26">{content}</div>
      </div>
      <div className="text-17 font-bold">{yyyymmdd}</div>
    </div>
  );
};

export default CommentForm;
