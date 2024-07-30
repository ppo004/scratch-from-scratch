import React, { useContext, useState } from "react";
import Icon from "../../Icon";
import { handleDragStart } from "../../../Utilities/DragEvents";
import { generateId } from "../../../Utilities/MoveAnimations";

const TurnLeft = ({ data }) => {
  const [turnLeft, setTurnLeft] = useState(data?.turnLeft || 15);

  return (
    <div
      className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1  text-sm cursor-pointer rounded w-[90%]"
      onDragStart={(e) =>
        handleDragStart(e, {
          index: generateId(),
          id: "TURN_LEFT",
          turnLeft,
        })
      }
      draggable
    >
      {"Turn Left"}
      <input
        type="text"
        className="w-[1.5rem] mx-2 rounded text-black text-center"
        value={turnLeft}
        onChange={(e) => !isNaN(e.target.value) && setTurnLeft(e.target.value)}
        onFocus={(event) => event.target.select()}
      />
      {" degrees"}
    </div>
  );
};

export default TurnLeft;
