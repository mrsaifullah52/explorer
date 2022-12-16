import React from "react";
import { toast } from "react-toastify";
import { PrimaryButton } from "../Button";

export default function SimulateThread({ account }) {
  const handleThreadSimulation = () => {
    toast.info(
      "The thread simulation started. You will get updates when it's done."
    );
  };

  return (
    <div>
      <PrimaryButton onClick={handleThreadSimulation}>
        Simulate Thread
      </PrimaryButton>
    </div>
  );
}
