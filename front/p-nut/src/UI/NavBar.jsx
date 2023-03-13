const NavBar = () => {
  return (
    <div className="w-full p-3 h-60">
      <div className="mx-auto flex w-full max-w-screen-lg justify-between items-center">
        <div className="flex">
          <div>
            <img className="h-9" src="src\assets\Logo.png" alt="logo" />
          </div>
        </div>
        <nav>
          <ul className="flex flex-row space-x-10">
            <li className="block text-md text-gray-600">음식추천</li>
            <li className="block text-md text-gray-600">게시판</li>
          </ul>
        </nav>
        <nav>
          <ul className="flex flex-row space-x-10">
            <li className="block text-md text-gray-600">로그인</li>
            <li className="block text-md text-gray-600">로그아웃</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
