import { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginHandler } from "../stores/auth";

const LoginFormComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.authentication.token);

  const [userInputEmail, setUserInputEmail] = useState("");
  const [userInputPassword, setUserInputPassword] = useState("");

  const emailChangeHandler = (event) => {
    setUserInputEmail(event.target.value);
  };
  const passwordChageHandler = (event) => {
    setUserInputPassword(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(
      loginHandler({ email: userInputEmail, password: userInputPassword })
    );
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <Fragment>
      <p className="mx-75 my-50 text-xl font-semibold">로그인</p>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col">
          <label htmlFor="email" className="mx-75">
            이메일
          </label>
          <input
            type="text"
            className="px-10 mx-75 my-12 w-465 h-50 border border-gray-300 rounded-xl"
            id="email"
            placeholder="이메일 주소를 입력해주세요."
            onChange={emailChangeHandler}
          />
        </div>
        <div className="mt-15 flex flex-col">
          <label htmlFor="password" className="mx-75">
            비밀번호
          </label>
          <input
            type="password"
            className="px-10 mx-75 my-12 w-465 h-50 border border-gray-300 rounded-xl bg-white text-gray-400 font-noto"
            id="password"
            placeholder="********"
            onChange={passwordChageHandler}
          />
        </div>
        <button
          type="submit"
          className="mx-75 mt-150 w-464 h-50 bg-red-400 rounded-xl text-white font-semibold"
        >
          로그인
        </button>
      </form>
    </Fragment>
  );
};

export default LoginFormComponent;
