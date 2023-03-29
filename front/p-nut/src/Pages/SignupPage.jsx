import LoginSignupFormComponent from "../Components/LoginSignupFormComponent";
import SignupFormComponent from "../Components/SignupFormComponent";

const SignupPage = () => {
  const phrase = "Are you a member?";
  const direction = "Login now";

  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center place-items-center">
      <div className="place-content-center">
        <LoginSignupFormComponent phrase={phrase} direction={direction}>
          <SignupFormComponent />
        </LoginSignupFormComponent>
      </div>
    </div>
  );
};

export default SignupPage;
