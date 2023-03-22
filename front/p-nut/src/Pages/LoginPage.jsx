import LoginSignupForm from "../Components/auth/LoginSignupForm";
import LoginForm from "../Components/auth/LoginForm";

const LoginPage = () => {
  const phrase = "Not a member yet?";
  const direction = "Register now";

  return (
    <div className="w-full h-screen bg-stone-400 flex justify-center place-items-center">
      <LoginSignupForm phrase={phrase} direction={direction}>
        <LoginForm />
      </LoginSignupForm>
    </div>
  );
};

export default LoginPage;
