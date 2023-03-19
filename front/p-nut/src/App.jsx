import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./Pages/RootLayout";
import MainPage from "./Pages/MainPage";
import ArticleCreatePage from "./Pages/ArticleCreatePage";
import ArticleListPage from "./Pages/ArticleListPage";
import ArticleDetailPage from "./Pages/ArticleDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <MainPage /> },
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
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
