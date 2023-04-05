import LoginSignupFormComponent from "../Components/LoginSignupFormComponent";
import LoginFormComponent from "../Components/LoginFormComponent";

const LoginPage = () => {
  const phrase = "아직 회원이 아니신가요?";
  const direction = "지금 가입하세요!";
  const currentPage = "login";

  return (
    <div className="w-full h-screen bg-stone-100 flex justify-center place-items-center">
      <LoginSignupFormComponent
        phrase={phrase}
        direction={direction}
        currentPage={currentPage}
      >
        <LoginFormComponent />
      </LoginSignupFormComponent>
    </div>
  );
};

export default LoginPage;
