import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useNavigateToTop } from "../hooks/useNavigateToTop";
import { useDispatch, useSelector } from "react-redux";
import { logoutHandler } from "../stores/auth";

import Sidebar from "../Components/Sidebar";
import AlertModal from "../UI/AlertModal";
import NutrientStatus from "../Components/NutrientStatus";
import UpdateUserData from "../Components/UpdateUserData";
import MyRecipe from "../Components/MyRecipe";
import BookmarkedRecipe from "../Components/BookmarkedRecipe";

import getUserInfo from "../api/getUserInfo";
import getMyRecipe from "../api/getMyRecipe";

const MyPage = () => {
  const token = useSelector((state) => state.auth.authentication.token);
  const dispatch = useDispatch();
  const navigate = useNavigateToTop();

  const data = useLoaderData();
  console.log("data: ", data);

  const [activeTab, setActiveTab] = useState("nutrientStatus");

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (!token) {
      dispatch(logoutHandler(navigate));
    }
  }, [token]);

  return (
    <div className="w-full flex justify-center text-#2B2C2B bg-gray-100">
      <AlertModal open={modalOpen} close={closeModal}>
        탈퇴하시겠습니까? 탈퇴 후 정보는 복구되지 않습니다.
      </AlertModal>
      <div className="flex bg-white w-1200">
        <div className="w-1/4 border-r">
          <Sidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onShowModal={openModal}
          />
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
  console.log("Loading My Page...");
  const userInfo = await getUserInfo();
  const myRecipe = await getMyRecipe();
  const data = {
    userInfo: userInfo,
    myRecipe: myRecipe,
  };

  return data;
}
