import React, { useContext } from "react";
import Logo from "@/components/Logo/Logo";
import { useRouter } from "next/router";
import Cash from "@/components/Logo/Cash";
import { StepContext } from "../../context/stepContext";

const Balance = () => {
  const router = useRouter();
  const { changeStep } = useContext(StepContext);
  const { changeStepData, stepData } = useContext(StepContext);

  return (
    <div className=" flex justify-center h-screen  items-start bg-white">
      <div>
        <div className="flex justify-center p-6">
          <Logo />
        </div>
        <div className=" flex justify-center ">
          <ul className="steps">
            <li
              onClick={() => {
                router.push("/step-one");
              }}
              className="step pr-4 step-primary text-black"
            >
              Currency
            </li>
            <li
              onClick={() => {
                router.push("/step-two");
              }}
              className="step step-primary pr-4 text-black"
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
        <div>
          <div className="flex justify-center items-center p-4">
            <div className="h-12 w-12 justify-center mt-16 bg-[#0166FF] flex items-center rounded-full">
              <Cash />
            </div>
          </div>
          <div className=" flex justify-center ">
            <h1 className="text-2xl text-black">Set up your cash Balance</h1>
          </div>
          <div className=" flex justify-center mt-8 ">
            <input
              type="number"
              placeholder="balance"
              className="rounded-lg p-2 bg-white border w-[80%]"
              onChange={(e) => {
                changeStepData(e.target.name, e.target.value);
              }}
            />
          </div>
          <div className=" flex justify-center p-6">
            <p className="text-[#A9A9A9]">
              How much cash do you have in your wallet?
            </p>
          </div>
          <div className="flex justify-center">
            <button
              className="text-white bg-primary rounded-2xl p-2 w-[80%]"
              onClick={() => {
                changeStep();
                router.push("/step-three");
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
