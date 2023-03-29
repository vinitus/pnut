import React from "react";

const LoginSignupFormComponent = (props) => {
  return (
    <div className="flex flex-row w-1232 h-661">
      <div className="w-1/2 bg-stone-300 rounded-l-xl">
        <p className="ml-75 my-50 font-semibold text-xl">Welcome !</p>
        <img
          className="mx-136 mt-90 w-300 h-270"
          src="assets\Logo1.png"
          alt="Logo Image"
        />
        <div className="ml-75 mt-110">
          <span>{props.phrase}</span>
          <span className="mx-12 relative group inline-block">
            <span className="text font-semibold">{props.direction}</span>
            <span className="absolute h-0.5 w-full bg-black bottom-1 left-0" />
          </span>
        </div>
      </div>
      <div className="w-1/2 bg-white rounded-r-xl">{props.children}</div>
    </div>
  );
};

export default LoginSignupFormComponent;
