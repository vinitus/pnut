import React from "react";
import ArticleListThumbnailComponent from "../Components/ArticleListThumbnailComponent";

const ArticleListPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex items-center justify-center flex-col">
        <img src="./assets/article_list_background.png" alt="" />
        <div className="absolute">
          <div className="font-bold text-40 text-center">
            콩이만의 레시피를 소개해보세요!
          </div>
          <div className="text-22 text-#FFFFFB text-center mb-10">
            궁금한 카테고리를 선택하면 증상별로 맞춤 음식을 볼 수 있어요
          </div>
        </div>
      </div>
      <div className="w-910 flex flex-row mt-50 h-80">
        <img src="./assets/Article_circle.png" alt="" className="m-auto" />
        <div className="text-23 text-#535453 border border-#AEAFAE rounded-10 w-full ml-52 p-26 flex flex-row place-content-between">
          <div className="font-light leading-28">
            자신의 레시피에 대해 자유롭게 이야기 해주세요!
          </div>
          <img src="./assets/Pencil.png" alt="" />
        </div>
      </div>
      <div className="w-full h-494 bg-#ECECEC mt-62 py-42">
        <div className="mx-auto w-1300">
          <div className="text-45 font-extrabold mb-17">금주의 레시피</div>
          <div className="flex place-content-between">
            <ArticleListThumbnailComponent
              imgSrc="./assets/top_recipe_1.png"
              rank="1"
              title="닭도리탕"
              author="콩이"
              profileImg="./assets/Article_circle.png"
            />
            <ArticleListThumbnailComponent
              imgSrc="./assets/top_recipe_2.png"
              rank="2"
              title="닭도리탕"
              author="콩이"
              profileImg="./assets/Article_circle.png"
            />
            <ArticleListThumbnailComponent
              imgSrc="./assets/top_recipe_3.png"
              rank="3"
              title="닭도리탕"
              author="콩이"
              profileImg="./assets/Article_circle.png"
            />
          </div>
        </div>
      </div>
      <div className="mt-45 mx-auto w-1300">
        <div className="m-8 flex items-center place-content-between">
          <div className="text-45 font-extrabold">레시피</div>
          <div>
            <input
              type="text"
              name=""
              id=""
              className="w-240 h-40 border border-#B3B3B3 rounded-12"
            />
            <select
              name=""
              id=""
              className="border border-#B3B3B3 rounded-12 p-8"
            >
              <option value="1">최신순</option>
              <option value="2">오래된 순</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-65">
          <ArticleListThumbnailComponent
            imgSrc="./assets/recipe_1.png"
            title="졸라 맛있는 닭도리탕"
            author="콩이"
            profileImg="./assets/Article_circle.png"
          />
          <ArticleListThumbnailComponent
            imgSrc="./assets/recipe_2.png"
            title="최고 맛있는 닭도리탕"
            author="콩이"
            profileImg="./assets/Article_circle.png"
          />
          <ArticleListThumbnailComponent
            imgSrc="./assets/recipe_3.png"
            title="둘이 먹다 하콩이 죽어도 모를 닭도리탕"
            author="콩이"
            profileImg="./assets/Article_circle.png"
          />
          <ArticleListThumbnailComponent
            imgSrc="./assets/recipe_1.png"
            title="졸라 맛있는 닭도리탕"
            author="콩이"
            profileImg="./assets/Article_circle.png"
          />
          <ArticleListThumbnailComponent
            imgSrc="./assets/recipe_2.png"
            title="최고 맛있는 닭도리탕"
            author="콩이"
            profileImg="./assets/Article_circle.png"
          />
          <ArticleListThumbnailComponent
            imgSrc="./assets/recipe_3.png"
            title="둘이 먹다 하콩이 죽어도 모를 닭도리탕"
            author="콩이"
            profileImg="./assets/Article_circle.png"
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleListPage;
