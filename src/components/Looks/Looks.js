import React from "react";
import { useState } from "react";
import SayTextSeconds from "./LooksComponents/SayTextSeconds";
import SayText from "./LooksComponents/SayText";
import Show from "./LooksComponents/Show";
import Hide from "./LooksComponents/Hide";

const Looks = () => {
  return (
    <>
      <div className="font-bold text-center w-[90%]"> {"Looks"} </div>
      <SayTextSeconds />
      <SayText />
      <Show />
      <Hide />
    </>
  );
};

export default Looks;
