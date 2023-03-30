import LoginSignupFormComponent from "../Components/LoginSignupFormComponent";
import SignupFormComponent from "../Components/SignupFormComponent";

const SignupPage = () => {
  const phrase = "계정이 있으신가요?";
  const direction = "로그인하러 가기!";
  const currentPage = "signup";

  return (
    <div className="w-full h-screen bg-stone-800 flex justify-center place-items-center">
      <div className="place-content-center">
        <LoginSignupFormComponent
          phrase={phrase}
          direction={direction}
          currentPage={currentPage}
        >
          <SignupFormComponent />
        </LoginSignupFormComponent>
      </div>
    </div>
  );
};

export default SignupPage;
