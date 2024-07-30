import React from "react";
import MoveSteps from "./MotionBlocks/MoveSteps";
import TurnLeft from "./MotionBlocks/TurnLeft";
import TurnRight from "./MotionBlocks/TurnRight";
import PointInDirection from "./MotionBlocks/PointInDirection";

const Motion = () => {
  return (
    <>
      <div className="font-bold text-center w-[90%]"> Motion </div>
      <MoveSteps />
      <TurnLeft />
      <TurnRight />
    </>
  );
};

export default Motion;
