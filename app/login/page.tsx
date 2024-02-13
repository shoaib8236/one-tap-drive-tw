import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Container, Input, Button } from "@/components";
import { Metadata } from "next";
const Login = () => {
  return (
    <div className="min-h-screen flex items-center">
      <Container>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 py-12 ">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={"/login-img.webp"}
              width={350}
              height={350}
              alt="Login-Image"
            />
            <p>
              Ease your car rental search across the world Access exclusive
              features with a free account View saved cars, contacted listings
              and more
            </p>
          </div>

          <div className="max-w-[400px] mx-auto">
            <div className="flex mx-auto items-center w-fit px-14 py-2 border-gray-300 border hover:cursor-pointer">
              <FaFacebook className="text-3xl text-fb-blue" />
              <span className="ps-4">Sign in with Facebook</span>
            </div>
            <div className="flex mx-auto items-center w-fit px-14 py-2 mt-3 border-gray-300 border hover:cursor-pointer">
              <FcGoogle className="text-3xl text-fb-blue" />
              <span className="ps-8">Sign in with Google</span>
            </div>

            <span className="text-center my-4 block uppercase font-medium relative before:h-[1px] before:box-content-[''] before:left-0 before:top-1/2 before:absolute before:w-full before:bg-gray-300">
             <span className="z-10 relative bg-light block w-max m-auto px-2"> or</span>
            </span>

            <Input
              className="flex mx-auto items-center w-fit px-10"
              type="email"
              placeholder="Email"
              name="email"
              id="email"
            />
            <Button className="w-full mt-3" text="Sent OTP" />
            <Button
              themeColor="outlined-primary"
              className="w-full mt-3"
              text="Sign in With Mobile No."
            />
            <p className="text-center mt-4">
              By continuing, you agree to our <br />
              <span className="text-primary">Terms Of Service</span> and{" "}
              <span className="text-primary">Privacy Policy</span>.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;

export const metadata: Metadata = {
  title: "Login | Rent a Car in Dubai on Day, Week, Month-Basis",
  description: "Login to Rent a Car in Dubai on Day, Week, Month-Basis",
};
