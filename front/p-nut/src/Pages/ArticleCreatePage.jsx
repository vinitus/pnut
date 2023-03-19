import React from "react";
import ArticleImgBlockComponent from "../Components/ArticleImgBlockComponent";

const ArticleCreatePage = () => {
  const subTitle = "font-semibold mb-24";

  return (
    <>
      <div className="flex items-center flex-col justify-evenly w-full h-100 px-auto grey-underbar">
        <div className="text-23 text-center ml-48">
          자신의 레시피에 대해 자유롭게 이야기 해주세요!
        </div>
        <button
          type="button"
          className="bg-#2F80ED rounded-20 text-prettywhite font-semibold px-50 py-5 text-xl"
        >
          글 등록하기
        </button>
      </div>
      <div className="w-1200 mx-auto border-x border-solid border-#7F807F px-203 pt-41">
        <ArticleImgBlockComponent
          text="대표 이미지 업로드"
          size="w-full h-354"
        />
        <div className="flex flex-col w-full text-21">
          <div className="w-full grey-underbar flex items-center">
            <input
              type="text"
              name=""
              id=""
              placeholder="레시피의 이름이 무엇인가요?"
              className="py-26 w-full px-38 inline-block"
            />
            <div className="inline">0/30</div>
          </div>
          <div className="w-full grey-underbar flex items-center">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="resize-none py-26 px-38 w-full"
              placeholder="레시피에 대한 간단한 설명을 붙여주세요"
            />
            <div className="inline">0/30</div>
          </div>
          <div className="px-40 mt-24 pb-31 grey-underbar">
            <div className={subTitle}>예상 소요 시간</div>
            <button type="button" className="border border-#7F807F p-10 mr-20">
              15분 컷
            </button>
            <button type="button" className="border border-#7F807F p-10 mr-20">
              30분 컷
            </button>
            <button type="button" className="border border-#7F807F p-10 mr-20">
              45분 컷
            </button>
            <button type="button" className="border border-#7F807F p-10">
              45분 이상
            </button>
          </div>
          <div className="px-40 mt-26 pb-31 grey-underbar">
            <div className={subTitle}>기준량</div>
            <div className="flex flex-row items-center mx-27-center">
              <button
                type="button"
                className="w-45 h-45 text-41 leading-none bg-#ECECEC"
              >
                -
              </button>
              <div className="text-27 mx-20">1</div>
              <button
                type="button"
                className="w-45 h-45 text-41 leading-none bg-#ECECEC"
              >
                +
              </button>
              <div className="text-27 mx-20">인분</div>
            </div>
          </div>
          <div className="px-40 w-full mt-26 pb-31 grey-underbar">
            <div className={subTitle}>재료</div>
            <div className="w-full flex items-center">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="resize-none w-full py-26"
                placeholder="재료를 입력해주세요"
              />
              <div className="inline">0/30</div>
            </div>
          </div>
          <div className="px-40 w-full mt-26 pb-31 grey-underbar">
            <div className={subTitle}>만드는 방법</div>
            <ArticleImgBlockComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCreatePage;
