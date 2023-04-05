import React from "react";
import { useLoaderData } from "react-router-dom";
import axiosInterface from "../api/axiosInterface";
import ArticleListThumbnail from "../Components/ArticleListThumbnail";
import getUserInfo from "../api/getUserInfo";
import { imageBaseURL } from "../api/baseURL";

const ArticleListPage = () => {
  // data 파싱
  const data = useLoaderData();
  const [recentArticleList, top3List, userInfo] = data;
  console.log("recentArticleList: ", recentArticleList);
  console.log("top3List: ", top3List);
  console.log("userInfo", userInfo);

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
        <img
          src={`${imageBaseURL}/${userInfo.profile_image_url}`}
          alt=""
          className="mx-auto rounded-full shadow-lg w-70 h-70"
        />
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
          <div className="flex place-content-between hover:opcaity-70">
            {top3List.data.map((ele, idx) => (
              <ArticleListThumbnail
                rank={idx + 1}
                key={ele.id}
                imgSrc={ele.thumbnail_image_url}
                title={ele.title}
                author={ele.nickName}
                profileImg={`${imageBaseURL}/${ele.nickName}`}
              />
            ))}
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
              name="sort-option"
              id="sort-option"
              className="border border-#B3B3B3 rounded-12 p-8"
            >
              <option value="1">최신순</option>
              <option value="2">좋아요 순</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-65">
          {recentArticleList.data.map((ele) => (
            <ArticleListThumbnail
              key={ele.id}
              boardId={ele.id}
              imgSrc={ele.thumbnail_image_url}
              title={ele.title}
              author={ele.nickName}
              profileImg={`${imageBaseURL}/${userInfo.nickname}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleListPage;

export async function loader() {
  const recentArticleList = new Promise((resolve, reject) => {
    axiosInterface("get", "/boards")
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });

  const top3List = new Promise((resolve, reject) => {
    axiosInterface("get", "/boards/top3")
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });

  const userInfo = await getUserInfo();

  const data = Promise.all([recentArticleList, top3List, userInfo]);

  return data;
}
