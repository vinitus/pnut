import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";

import RootLayout from "./Pages/RootLayout";
import MainPage from "./Pages/MainPage";
import ArticleCreatePage from "./Pages/ArticleCreatePage";

import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <MainPage /> },
      {
        path: "newpost",
        element: <ArticleCreatePage />,
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

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
