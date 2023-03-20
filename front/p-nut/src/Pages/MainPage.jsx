import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full">
      <h1 className="flex font-nanum">Main</h1>
      <button
        type="button"
        onClick={() => {
          navigate("/newpost");
        }}
      >
        게시글작성
      </button>
      <button
        type="button"
        onClick={() => {
          navigate("/board");
        }}
      >
        게시글목록
      </button>
      <button
        type="button"
        onClick={() => {
          navigate("/board/1");
        }}
      >
        게시글조회
      </button>
      <button
        type="button"
        onClick={() => {
          navigate("/recipe/1");
        }}
      >
        레시피조회
      </button>
    </div>
  );
};

export default MainPage;
