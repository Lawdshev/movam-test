import React, { useState } from "react";
import { FaApple } from "react-icons/fa";
import Tab from "../../components/login/tab";
import Input from "../../components/login/input";
import logo from "../../assets/Screenshot 2025-02-01 at 04.51.08.png";
import rImage from "../../assets/Screenshot 2025-02-01 at 05.24.16.png";
import { FcGoogle } from "react-icons/fc";
import { TiSocialFacebook } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/login";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setError("");
    setEmail(emailValue);
    setIsValid(emailRegex.test(emailValue));
  };

  return (
    <div className="flex flex-col xl:flex-row h-screen  w-full bg-gray-100">
      <div className="w-full xl:w-1/2 bg-white h-screen xl:h-full pt-14 pb-6">
        <div className=" flex flex-col justify-between w-full h-full ">
          <div className="text-xl font-medium text-center font-mona">
            <img src={logo} alt="Logo" className="w-60 mx-auto" />
          </div>
          <div className="w-[80%] md:w-[70%] lg:w-[50%] mx-auto mt-12">
            <h2 className="text-2xl font-bold text-center font-inter">
              Welcome Back
            </h2>
            <p className="text-gray-400 text-center">
              Welcome back, Please enter your details
            </p>
            {error && <p className="text-red-500 text-center my-3">{error}</p>}
            <div className="flex mt-6 w-full ">
              <Tab />
            </div>
            <div className="mt-6">
              <Input
                email={email}
                handleChange={handleEmailChange}
                isValid={isValid}
              />
            </div>

            <button
              className="w-full bg-[#0066ff] disabled:opacity-50 text-white py-4 mt-6 rounded-xl font-semibold"
              onClick={() => {
                login(email, setLoading, navigate, setError);
              }}
              disabled={loading || !isValid}
            >
              {loading ? "Loading..." : " Continue"}
            </button>
            <div className="flex justify-center items-center space-x-4">
              <div className="flex-grow border-t border-[#999999]"></div>
              <div className="text-center text-sm my-6 text-[#999999]">
                Or Continue With
              </div>
              <div className="flex-grow border-t border-[#999999]"></div>
            </div>
            <div className="flex justify-center space-x-4">
              <button className="p-3 border rounded-full">
                <FcGoogle size={20} />
              </button>
              <button className="p-3 border rounded-full bg-black">
                <FaApple color="white" size={20} />
              </button>
              <button className="p-3 border rounded-full bg-[#1977f2]">
                <TiSocialFacebook color="white" size={20} />
              </button>
            </div>
          </div>
          <div className="px-12 lg:px-28 mt-8 lg:mt-0">
            <p className="text-[#b7b8b6] text-xs mt-6 text-center">
              Join the millions of smart investors who trust us to manage their
              finances. Login to access your personalized dashboard, track your
              portfolio performances, and make informed investment decisions.
            </p>
          </div>
        </div>
      </div>
      {/* Right Side - Image */}
      <div className="w-full xl:w-1/2 hidden xl:flex justify-center items-center bg-[#74bfea]">
        <img
          src={rImage}
          alt="Login Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
