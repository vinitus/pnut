import { Fragment, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import createUserAPI from "../api/createUserAPI";
import checkDuplicationAPI from "../api/checkDuplicationAPI";
import requestCodeAPI from "../api/requestCodeAPI";
import checkCodeAPI from "../api/checkCodeAPI";

const SignupFormComponent = () => {
  // const navigate = useNavigate();
  // const token = useSelector((state) => state.auth.authentication.token);

  const [userInputNickname, setUserInputNickname] = useState("");
  const [userInputName, setUserInputName] = useState("");
  const [userInputEmail, setUserInputEmail] = useState("");
  const [userInputAge, setUserInputAge] = useState("");
  const [userInputGender, setUserInputGender] = useState("");
  const [userInputCode, setUserInputCode] = useState("");
  const [userInputPassword1, setUserInputPassword1] = useState("");
  // const [userInputPassword2, setUserInputPassword2] = useState("");

  const [isNicknameDuplicated, setIsNicknameDuplicated] = useState(false);
  const [isEmailDuplicated, setIsEmailDuplicated] = useState(false);
  const [isCodeValid, setIsCodeValid] = useState(false);
  const [codeValidationMessage, setCodeValidationMessage] = useState("");

  const nicknameChangeHandler = (event) => {
    setUserInputNickname(event.target.value);
  };
  const nameChangeHandler = (event) => {
    setUserInputName(event.target.value);
  };
  const genderChangeHandler = (event) => {
    setUserInputGender(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setUserInputAge(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setUserInputEmail(event.target.value);
  };
  const codeChangeHandler = (event) => {
    setUserInputCode(event.target.value);
  };
  const password1ChangeHandler = (event) => {
    setUserInputPassword1(event.target.value);
  };
  // const password2ChangeHandler = (event) => {
  //   setUserInputPassword2(event.target.value);
  // };

  const duplicateNicknameCheckHandler = async (event) => {
    const message = await checkDuplicationAPI("nickname", event.target.value);
    if (message === "nickname duplication") {
      setIsNicknameDuplicated(true);
    } else {
      setIsNicknameDuplicated(false);
    }
  };

  const duplicateEmailCheckHandler = async (event) => {
    const message = await checkDuplicationAPI("email", event.target.value);
    if (message === "email duplication") {
      setIsEmailDuplicated(true);
    } else {
      setIsEmailDuplicated(false);
    }
  };

  const requestCodeHandler = () => {
    requestCodeAPI(userInputEmail);
  };

  const checkCodeHandler = async () => {
    const checkResult = await checkCodeAPI(userInputEmail, userInputCode);
    console.log("checkResult: ", checkResult);
    if (checkResult === "valid code") {
      setCodeValidationMessage("인증에 성공했습니다.");
      setIsCodeValid(true);
    }
    if (checkResult === "code timeout") {
      setCodeValidationMessage("인증 번호가 만료되었습니다.");
      setIsCodeValid(false);
    }
    if (checkResult === "invalid code") {
      setCodeValidationMessage("유효하지 않은 인증 번호입니다.");
      setIsCodeValid(false);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    createUserAPI(
      userInputAge,
      userInputEmail,
      userInputGender,
      userInputName,
      userInputNickname,
      userInputPassword1
    );
  };

  useEffect(() => {
    console.log("isNicknameDuplicated: ", isNicknameDuplicated);
    console.log("isEmailDuplicated: ", isEmailDuplicated);
  }, [isNicknameDuplicated, isEmailDuplicated]);

  return (
    <Fragment>
      <p className="mx-75 my-25 text-2xl font-bold">이메일로 가입하세요</p>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col">
          <label htmlFor="nickname" className="mx-75">
            닉네임
          </label>
          <div className="flex items-center">
            <input
              type="text"
              id="nickname"
              className={`px-10 ml-75 my-10 w-300 h-40 border rounded-10 ${
                isNicknameDuplicated ? "border-red-500" : "border-gray-300"
              } focus:border-blue-500`}
              onChange={nicknameChangeHandler}
              onBlur={duplicateNicknameCheckHandler}
            />
            {isNicknameDuplicated && (
              <span className="ml-10 text-red-500">
                사용 중인 아이디입니다.
              </span>
            )}
          </div>
        </div>

        <div className="mx-75 my-10 flex">
          <div className="flex-1 flex flex-col">
            <label htmlFor="name" className="mb-7">
              이름 (실명)
            </label>
            <input
              type="text"
              id="name"
              className="px-10 w-120 h-40 border border-gray-300 rounded-10 focus:border-blue-500"
              onChange={nameChangeHandler}
            />
          </div>
          <div className="flex-1 flex flex-col">
            <label htmlFor="gender" className="mb-7">
              성별
            </label>
            <select
              name="gender"
              className="px-10 w-120 h-40 border border-gray-300 rounded-10 focus:border-blue-500"
              onChange={genderChangeHandler}
            >
              <option value="0">남성</option>
              <option value="1">여성</option>
            </select>
          </div>
          <div className="flex-1 flex flex-col">
            <label htmlFor="age" className="mb-7">
              나이 (만)
            </label>
            <input
              type="text"
              id="age"
              className="px-10 w-120 h-40 border border-gray-300 rounded-10 focus:border-blue-500"
              onChange={ageChangeHandler}
            />
          </div>
        </div>
        <div className="flex">
          <div className="ml-75 mt-10 mb-4 flex-1 flex flex-col">
            <label htmlFor="email">이메일</label>
            <input
              type="text"
              id="email"
              className={`px-15 mt-10 w-330 h-40 border rounded-10 ${
                isEmailDuplicated ? "border-red-500" : "border-gray-300"
              } focus:border-blue-500`}
              placeholder="이메일 주소를 입력해주세요."
              onChange={emailChangeHandler}
              onBlur={duplicateEmailCheckHandler}
            />
          </div>
          <div className="flex-1">
            <button
              type="button"
              className="mx-15 mt-44 w-120 h-40 bg-red-400 rounded-xl text-white font-semibold"
              onClick={requestCodeHandler}
            >
              인증번호 받기
            </button>
          </div>
        </div>
        {isEmailDuplicated && (
          <span className="ml-75 px-15 text-red-500">
            사용 중인 이메일입니다.
          </span>
        )}
        <div>
          <div className="flex">
            <div className="ml-75 mt-5 mb-4 flex-1 flex flex-col">
              <input
                type="text"
                id="code"
                className={`px-15 w-330 h-40 border rounded-10 focus:border-blue-500 ${
                  isCodeValid ? "border-green-500" : "border-gray-300"
                }`}
                placeholder="인증 코드를 입력해주세요."
                onChange={codeChangeHandler}
              />
            </div>
            <div className="flex-1">
              <button
                type="button"
                className="mx-15 mt-5 w-120 h-40 bg-#2F80ED rounded-xl text-white font-semibold"
                onClick={checkCodeHandler}
              >
                인증번호 확인
              </button>
            </div>
          </div>
          <span
            className={`ml-75 px-15 ${
              isCodeValid ? "text-green-500" : "text-red-500"
            }`}
          >
            {codeValidationMessage}
          </span>
        </div>
        <div className="ml-75 mt-10 inline-flex">
          <div className="flex flex-col">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              className="px-10 mt-10 w-200 h-40 border border-gray-300 rounded-10 text-gray-400 font-noto focus:border-blue-500"
              placeholder="********"
              onChange={password1ChangeHandler}
            />
          </div>
          <div className="flex flex-col ml-62">
            <label htmlFor="passwordcheck">비밀번호 확인</label>
            <input
              type="password"
              id="passwordcheck"
              className="px-10 mt-10 w-200 h-40 border border-gray-300 rounded-10 text-gray-400 font-noto focus:border-blue-500"
              placeholder="********"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mx-75 mt-50 w-464 h-50 bg-red-400 rounded-xl text-white font-semibold"
        >
          회원가입
        </button>
      </form>
    </Fragment>
  );
};

export default SignupFormComponent;
