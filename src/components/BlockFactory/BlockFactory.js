import React from "react";
import SayText from "../Looks/LooksComponents/SayText";
import SayTextSeconds from "../Looks/LooksComponents/SayTextSeconds";
import Show from "../Looks/LooksComponents/Show";
import Hide from "../Looks/LooksComponents/Hide";
import MoveSteps from "../Motion/MotionBlocks/MoveSteps";
import TurnLeft from "../Motion/MotionBlocks/TurnLeft";
import TurnRight from "../Motion/MotionBlocks/TurnRight";
import PointInDirection from "../Motion/MotionBlocks/PointInDirection";

const BlockFactory = (block) => {
  switch (block.id) {
    case "SAY_TEXT_WITH_SECS":
      return <SayTextSeconds key={block.index} data={block} />;
    case "SAY_TEXT":
      return <SayText key={block.index} data={block} />;
    case "SHOW":
      return <Show key={block.index} />;
    case "HIDE":
      return <Hide key={block.index} />;
    case "MOVE_STEPS":
      return <MoveSteps key={block.index} data={block} />;
    case "TURN_LEFT":
      return <TurnLeft key={block.index} data={block} />;
    case "TURN_RIGHT":
      return <TurnRight key={block.index} data={block} />;
    case "POINT_IN_DIRECTION":
      return <PointInDirection key={block.index} data={block} />;
    default:
      return block.id;
  }
};


export default BlockFactory;
