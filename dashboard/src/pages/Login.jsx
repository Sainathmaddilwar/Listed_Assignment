import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
// import jwt_decode from "jwt-decode";
const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => navigate("/dashboard"),
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  return (
    <div className="flex">
      <div className="flex justify-center align-middle items-center  w-0 sm:w-5/12 h-screen bg-black">
        <h1 className="text-white text-7xl font-bold tracking-wider">Board.</h1>
      </div>

      <div className="bg-[#F5F5F5] w-full sm:w-7/12 flex justify-center items-center">
        <div>
          <h3 className="text-4xl font-bold mb-1">Sign In</h3>

          <p className="text-base font-normal mb-6">Sign in to your account</p>

          <div className="flex mb-6 justify-between">
            <button
              className="bg-white rounded-[10px] px-6 py-2 mr-4 flex items-center"
              onClick={handleGoogleLogin}
            >
              <img
                src="../assets/google-icon.svg"
                alt="google-icon"
                className="mr-3"
              />
              <p className="text-xs text-[#858585]">Sign in with Google</p>
            </button>
            <button className="bg-white rounded-[10px] px-6 py-2 flex items-center">
              <img
                src="../assets/apple.svg"
                alt="apple-icon"
                className="mr-3"
              />
              <p className="text-xs text-[#858585]">Sign in with Apple</p>
            </button>
          </div>

          <form
            className="bg-white rounded-[20px] px-8 py-6 w-[410px]"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="my-4">
              <p className="text-base mb-2">Email Address</p>
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-2 placeholder-[#B0B0B0] text-black text-base relative bg-[#F5F5F5] rounded-[10px]  border-0 outline-none focus:outline-none w-full"
              />
            </div>

            <div className="my-4">
              <p className="text-base mb-2">Password</p>
              <input
                type="password"
                placeholder="Password"
                className="px-4 py-2 placeholder-[#B0B0B0] text-black text-base relative bg-[#F5F5F5] rounded-[10px]  border-0 outline-none focus:outline-none w-full"
              />
            </div>

            <button className="text-base text-[#346BD5] my-2">
              Forgot Password?
            </button>

            <button
              type="submit"
              className="block w-full bg-black text-white rounded-[10px] p-2 text-base font-bold my-2"
            >
              Sign in
            </button>
          </form>

          <div className="flex justify-center items-center my-2">
            <p className="text-base text-[#858585] mr-1">
              {" "}
              Don’t have an account?{" "}
            </p>
            <button className="text-base text-[#346BD5] my-2">
              {" "}
              Register Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
