import Logo from "@/components/Logo/Logo";
import Money from "@/components/Logo/Money";
import { StepContext } from "../../context/stepContext";
import React, { useContext } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Currency = () => {
  const router = useRouter();

  const gotoStep = () => {
    changeStep();
    router.push("/step-two");
  };

  useEffect(() => {}, []);
  const { changeStepData, changeStep } = useContext(StepContext);

  return (
    <div className=" h-screen mx-auto justify-center bg-white ">
      <div>
        <div className="flex justify-center p-6">
          <Logo />
        </div>
        <div className="flex justify-center">
          <ul className="steps">
            <li className="step pr-4 step-primary text-black">Currency</li>
            <li
              onClick={() => {
                router.push("/step-two");
              }}
              className="step pr-4 text-black"
            >
              Balance
            </li>
            <li
              onClick={() => {
                router.push("/step-three");
              }}
              className="step text-black"
            >
              Finish
            </li>
          </ul>
        </div>
        <div className=" justify-center items-center">
          <div className="flex justify-center items-center p-4">
            <div className="h-12 w-12 justify-center mt-16 bg-[#0166FF] flex items-center rounded-full">
              <Money />
            </div>
          </div>
          <div className="flex justify-center">
            <h1 className="text-2xl text-black">Select base currency</h1>
          </div>
          <div className="flex justify-center mt-8">
            <select
              className="select select-primary w-full max-w-xs"
              onChange={(e) => {
                console.log(e.target.name);
                console.log(e.target.value);
                changeStepData(e.target.name, e.target.value);
              }}
            >
              <option>MNT-Mongolian Tugrik</option>
              <option>USA-Dollar</option>
              <option>Korean-EOW</option>
            </select>
          </div>
          <div className="flex justify-center p-6  ">
            <p className="text-[#A9A9A9] justify-center ">
              Your base currency should be the one you use most often. <br />{" "}
              All transaction in other currencies will be calculated based on
              this one
            </p>
          </div>
          <div className="flex justify-center ">
            <button
              className="text-white bg-primary rounded-2xl p-2 w-[25%]"
              onClick={gotoStep}
              type="submit"
              value="Submit"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currency;
