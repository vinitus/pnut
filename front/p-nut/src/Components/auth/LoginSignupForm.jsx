import React from "react";

const LoginSignupForm = (props) => {
  return (
    <div className="flex flex-row w-1232 h-661">
      <div className="w-1/2 bg-stone-200 rounded-l-xl">
        <p className="font-nanum font-semibold text-xl ml-11 mt-11 mb-8">
          Welcome !
        </p>
        <div className="flex justify-center w-344 h-196">
          <img
            className="object-cover"
            src="src\assets\Logo.png"
            alt="Logo Image"
          />
        </div>
        <div className="ml-10 mt-8">
          <span>{props.phrase}</span>
          <span className="mx-8">{props.direction}</span>
        </div>
      </div>
      <div className="w-1/2 bg-white rounded-r-xl">{props.children}</div>
    </div>
  );
};

export default LoginSignupForm;
