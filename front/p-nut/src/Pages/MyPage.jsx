import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import NutrientStatus from "../Components/NutrientStatus";
import UpdateUserData from "../Components/UpdateUserData";
import MyRecipe from "../Components/MyRecipe";
import BookmarkedRecipe from "../Components/BookmarkedRecipe";

const MyPage = () => {
  const [activeTab, setActiveTab] = useState("nutrientStatus");

  return (
    <div className="w-full flex justify-center text-#2B2C2B ">
      <div className="flex w-1200">
        <div className="w-1/4">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        {/* MainContent */}
        <div className="w-3/4">
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
