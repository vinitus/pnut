import { Fragment, React } from "react";
import { Menu, Transition } from "@headlessui/react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutHandler } from "../stores/auth";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    await dispatch(logoutHandler());
    navigate("/login");
  };

  return (
    <div className="fixed z-50 flex w-full p-3 h-60 bg-white/80">
      <div className="flex items-center w-full justify-evenly">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <img className="h-50" src="assets\Logo1.png" alt="logo" />
        </button>
        <div className="flex items-center space-x-50">
          {/* 음식추천 */}
          <Menu as="div" className="relative w-120">
            <div>
              <Menu.Button className="flex items-center justify-center w-full font-regular text-md">
                음식추천
                <img
                  className="h-10 ml-10 rotate-90"
                  src="assets\chevron.png"
                  alt=""
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right w-170 rounded-5 bg-white/70 ">
                <div className="py-2">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => {
                          navigate("/survey");
                        }}
                        className={classNames(
                          active ? "bg-white " : "",
                          "block px-15 py-10 text-md rounded-5 w-full text-left",
                        )}
                      >
                        개인설문조사
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => {
                          navigate("/symptoms");
                        }}
                        className={classNames(
                          active ? "bg-white " : "",
                          "block px-15 py-10 text-md rounded-5 w-full text-left",
                        )}
                      >
                        보편적인 증상
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => {
                          navigate("/search");
                        }}
                        className={classNames(
                          active ? "bg-white " : "",
                          "block px-15 py-10 text-md rounded-5 w-full text-left",
                        )}
                      >
                        식재료 음식 검색
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          {/* 게시판 */}
          <Menu as="div" className="relative w-120">
            <div>
              <Menu.Button
                onClick={() => {
                  navigate("/board");
                }}
                className="flex items-center justify-center w-full font-regular text-md"
              >
                게시판
              </Menu.Button>
            </div>
          </Menu>
        </div>

        <div className="flex items-center text-sm space-x-30">
          <div className="px-12 py-8 text-gray-800 bg-gray-100 rounded-full">
            회원가입
          </div>
          <div
            className="px-12 py-8 text-white font-semibold bg-#FF6B6C rounded-full"
            onClick={logout}
          >
            로그인
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
