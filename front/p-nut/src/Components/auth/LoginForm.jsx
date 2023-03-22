import { Fragment } from "react";

const LoginForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    return;
  };
  return (
    <Fragment>
      <p className="mx-75 my-50 text-xl font-semibold font-nanum">로그인</p>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email" className="mx-75">
            이메일
          </label>
          <input
            type="text"
            className="px-10 mx-75 my-12 w-465 h-50 border border-gray-300 rounded-xl"
            id="email"
            placeholder="이메일 주소를 입력하세요."
          />
        </div>
        <div className="mt-15">
          <label htmlFor="password" className="mx-75">
            비밀번호
          </label>
          <input
            type="password"
            className="px-10 mx-75 my-12 w-465 h-50 border border-gray-300 rounded-xl bg-white text-gray-800"
            id="password"
            placeholder="********"
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

export default LoginForm;
