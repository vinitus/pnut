import LoginSignupForm from "../Components/auth/LoginSignupForm";
import SignupForm from "../Components/auth/SignupForm";

const SignupPage = () => {
  const phrase = "Are you a member?";
  const direction = "Login now";

  return (
    <div className="w-full h-screen bg-stone-400 flex justify-center place-items-center">
      <div className="place-content-center">
        <LoginSignupForm phrase={phrase} direction={direction}>
          <SignupForm />
        </LoginSignupForm>
      </div>
    </div>
  );
};

export default SignupPage;
