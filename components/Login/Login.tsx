import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Input from "../Input/Input";
import Button from "../Button/Button";

const Login = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 py-12 ">
        <div className="flex flex-col justify-center items-center">
          <Image src={"/login-img.webp"} width={350} height={350} alt="Login-Image" />
          <p>Ease your car rental search across the world Access exclusive features with a free account View saved cars, contacted listings and more</p>
        </div>
        <div>
          <div className="">
            <div className="w-4/12 mx-auto">
              <div className="flex mx-auto items-center w-fit px-14 py-2 border-gray-200 border">
                <FaFacebook className="text-3xl text-fb-blue" />
                <span className="ps-4">Sign in with facebook</span>
              </div>
              <div className="flex mx-auto items-center w-fit px-14 py-2 mt-3 border-gray-200 border">
                <FcGoogle className="text-3xl text-fb-blue" />
                <span className="ps-8">Sign in with Google</span>
              </div>
              <p className="text-center mt-4">or</p>
              <Input className="flex mx-auto items-center w-fit px-10" type="email" placeholder="Email" name="email" id="email" />
              <Button className="text-light w-full mt-3" text="Sent OTP" />
              <Button themeColor="outlined-primary" className="w-full mt-3" text="Sign in With Mobile No." />
              <p className="text-center mt-3">
                By continuing, you agree to our <br />
                <span className="text-primary">Terms Of Service</span> and <span className="text-primary">Privacy Policy</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
