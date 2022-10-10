import React from "react";
import { PrimaryButton } from "../Button";

export const CreateQueue = () => {
  return (
    <div className="flex flex-col">
      <h2>Hello World</h2>
      <input type="text" name="queue" id="queue" className="p-3" />
      <PrimaryButton>Create Queue</PrimaryButton>
    </div>
  );
};
