import React, { useContext, useState } from "react";
import Balance from "../sign-up-step/Balance";
import Currency from "../sign-up-step/Currency";
import Finish from "../sign-up-step/Finish";
import Logo from "../Logo/Logo";

import { StepContext } from "../../context/StepContext";

const SignUpSteps = () => {
  const { step, changeStep, goToDashboard } = useContext(StepContext);

  const StepSwitch = () => {
    switch (step) {
      case 1:
        return (
          <ul className="steps">
            <li className="step step-primary">Currency</li>
            <li className="step">Balance</li>
            <li className="step">Finish</li>
          </ul>
        );
      case 2:
        return (
          <ul className="steps">
            <li className="step step-primary">Currency</li>
            <li className="step step-primary">Balance</li>
            <li className="step">Finish</li>
          </ul>
        );

      case 3:
        return (
          <ul className="steps">
            <li className="step step-primary">Currency</li>
            <li className="step step-primary">Balance</li>
            <li className="step step-primary">Finish</li>
          </ul>
        );
    }
  };

  return (
    <div className="flex w-screen h-screen">
      <div className="flex-1 flex flex-col items-center bg-white gap-3">
        <Logo />
        {StepSwitch()}
        <div className="mt-20">
          {step === 1 && <Currency />}
          {step === 2 && <Balance />}
          {step === 3 && <Finish />}
        </div>
        <div>
          {step === 3 && <Finish /> ? (
            <button
              onClick={goToDashboard}
              className="btn mt-5 btn-primary w-full px-32 max-w-lg text-lg text-white font-normal rounded-full"
            >
              Go to Dashboard
            </button>
          ) : (
            <button
              onClick={changeStep}
              className="btn mt-5 btn-primary w-full px-32 max-w-lg text-lg text-white font-normal rounded-full"
            >
              Confirm
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUpSteps;
