import React, { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./Pages/RootLayout";
import MainPage from "./Pages/MainPage";
import ArticleCreatePage from "./Pages/ArticleCreatePage";
import ArticleListPage from "./Pages/ArticleListPage";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
