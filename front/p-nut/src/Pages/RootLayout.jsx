import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../UI/NavBar";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex flex-col">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
