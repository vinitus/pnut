import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      {/* 나중에 네비게이션 들어갈 자리 */}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
