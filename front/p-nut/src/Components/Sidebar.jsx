import React from "react";

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center w-full text-center">
      <div className="flex flex-col w-250 space-y-50 my-100">
        {/* <div className="w-full h-100" /> */}
        {/* 프로필 */}
        <div className="space-y-10">
          <img
            className="mx-auto rounded-full shadow-lg h-100 w-100"
            src="public\assets\profileimage.png"
            alt=""
          />
          <p className="pt-5 text-lg font-bold">minofficial</p>
          <p>minofficial@naver.com</p>
        </div>
        {/* 설문조사 수정 */}
        <div className="rounded-10 bg-#FF6B6C/30 text-#FF6B6C">
          <p className="text-lg font-bold py-15">설문조사 수정</p>
        </div>
        {/* 내비게이션 */}
        <div className="text-start divide-y divide-gray-500 text-#535453 text-lg">
          <div
            className={`flex py-15 px-10 hover:bg-gray-100  ${
              activeTab === "nutrientStatus" ? "bg-gray-100 " : ""
            }`}
            onClick={() => setActiveTab("nutrientStatus")}
          >
            나의 영양 정보
            <div>
              <p className="font-bold text-center text-sm bg-#FF6B6C text-white rounded-full w-30 p-5 ml-10">
                13
              </p>
            </div>
          </div>
          <div
            className={`flex py-15 px-10 hover:bg-gray-100  ${
              activeTab === "updateUserData" ? "bg-gray-100 " : ""
            }`}
            onClick={() => setActiveTab("updateUserData")}
          >
            회원 정보 수정
            <div>
              <p className="font-bold text-center text-sm bg-#FF6B6C text-white rounded-full w-30 p-5 ml-10">
                13
              </p>
            </div>
          </div>
          <div
            className={`flex py-15 px-10 hover:bg-gray-100  ${
              activeTab === "myRecipe" ? "bg-gray-100 " : ""
            }`}
            onClick={() => setActiveTab("myRecipe")}
          >
            내가 작성한 레시피
            <div>
              <p className="font-bold text-center text-sm bg-#FF6B6C text-white rounded-full w-30 p-5 ml-10">
                13
              </p>
            </div>
          </div>
          <div
            className={`flex py-15 px-10 hover:bg-gray-100  ${
              activeTab === "bookmarkedRecipe" ? "bg-gray-100 " : ""
            }`}
            onClick={() => setActiveTab("bookmarkedRecipe")}
          >
            북마크한 레시피
            <div>
              <p className="font-bold text-center text-sm bg-#FF6B6C text-white rounded-full w-30 p-5 ml-10">
                13
              </p>
            </div>
          </div>
        </div>
        {/* 로그아웃, 회원탈퇴 */}
        <div className="space-y-10">
          <div className="rounded-10 text-#FF6B6C border border-#FF6B6C">
            <p className="text-lg font-bold py-15">로그아웃</p>
          </div>
          <p className="flex items-center justify-center text-gray-500">
            회원탈퇴
            <img
              className="pl-5 scale-50"
              src="public\assets\chevron.png"
              alt=""
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;