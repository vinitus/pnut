import LoginSignupFormComponent from "../Components/LoginSignupFormComponent";
import LoginFormComponent from "../Components/LoginFormComponent";

const LoginPage = () => {
  const phrase = "Not a member yet?";
  const direction = "Register now";

  return (
    <div className="w-full h-screen bg-stone-400 flex justify-center place-items-center">
      <LoginSignupFormComponent phrase={phrase} direction={direction}>
        <LoginFormComponent />
      </LoginSignupFormComponent>
    </div>
  );
};

export default LoginPage;
