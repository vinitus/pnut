import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import MainPage from "./Pages/MainPage";
import ArticleCreatePage from "./Pages/ArticleCreatePage";
import ArticleListPage from "./Pages/ArticleListPage";
import ArticleDetailPage from "./Pages/ArticleDetailPage";
import RecipeDetailPage from "./Pages/RecipeDetailPage";
import SymptomsRecommandPage from "./Pages/SymptomsRecommandPage";
import SurveyRecommendPage from "./Pages/SurveyRecommendPage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import MyPage from "./Pages/MyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <MainPage /> },
      {
        path: "symptoms",
        element: <SymptomsRecommandPage />,
      },
      {
        path: "board",
        element: <ArticleListPage />,
      },
      {
        path: "newpost",
        element: <ArticleCreatePage />,
      },
      {
        path: "board/:articleId",
        element: <ArticleDetailPage />,
      },
      {
        path: "recipe/:recipeId",
        element: <RecipeDetailPage />,
      },
      {
        path: "survey",
        element: <SurveyRecommendPage />,
      },
      {
        path: "mypage",
        element: <MyPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);

export default router;
