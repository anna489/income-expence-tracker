import React from "react";
import Logo from "@/components/Logo/Logo";
import { useRouter } from "next/router";

const LogIn = () => {
  const router = useRouter();

  return (
    <div className="flex h-screen w-screen bg-white">
      <section className="flex-1 flex justify-center items-center">
        <div className="">
          <div className="flex justify-center">
            <Logo />
          </div>
          <div className="flex justify-center mt-5">
            <h1 className="text-2xl font-semibold">Welcome Back </h1>
          </div>
          <div className="flex justify-center">
            <p className="text-base font-normal leading-6  p-2">
              Welcome back, Please enter your details
            </p>
          </div>
          <div className=" mt-6">
            <input
              type="text"
              placeholder="Email"
              className=" flex justify-center input p-2 input-bordered border rounded-lg border-[#A3A3A3] input-primary w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Password"
              className=" mt-3 input p-2 input-bordered border rounded-lg border-[#A3A3A3] input-primary w-full max-w-xs"
            />
          </div>
          <div className="flex justify-center mt-5 ">
            <button className="btn btn-active text-gl text-white w-full  btn-primary bg-[#0166FF] max-w-xs">
              Log in
            </button>
          </div>
          <div className="flex justify-center mt-5">
            <div className="mr-2">
              <p>Don’t have account?</p>
            </div>
            <button
              className="text-[#0166FF]"
              onClick={() => {
                router.push("/SignUp");
              }}
            >
              Sign up
            </button>
          </div>
        </div>
      </section>
      <section className="flex-1 bg-[#0166FF]"></section>
    </div>
  );
};

export default LogIn;
