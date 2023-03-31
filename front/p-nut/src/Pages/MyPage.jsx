import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import NutrientStatus from "../Components/NutrientStatus";
import UpdateUserData from "../Components/UpdateUserData";
import MyRecipe from "../Components/MyRecipe";
import BookmarkedRecipe from "../Components/BookmarkedRecipe";

import getUserInfo from "../api/getUserInfo";

const MyPage = () => {
  const data = useLoaderData();
  console.log("data: ", data);

  const [activeTab, setActiveTab] = useState("nutrientStatus");

  return (
    <div className="w-full flex justify-center text-#2B2C2B bg-gray-100">
      <div className="flex bg-white w-1200">
        <div className="w-1/4 border-r">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        {/* MainContent */}
        <div className="w-3/4 p-75 px-30">
          {activeTab === "nutrientStatus" && <NutrientStatus />}
          {activeTab === "updateUserData" && <UpdateUserData />}
          {activeTab === "myRecipe" && <MyRecipe />}
          {activeTab === "bookmarkedRecipe" && <BookmarkedRecipe />}
        </div>
      </div>
    </div>
  );
};

export default MyPage;

export async function loader() {
  console.log("Loading...");
  const userInfo = await getUserInfo();

  return userInfo;
}
