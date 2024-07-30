import React, { useContext, useState } from "react";
import Icon from "../../Icon";
import { handleDragStart } from "../../../Utilities/DragEvents";
import { generateId } from "../../../Utilities/MoveAnimations";

const TurnRight = ({ data }) => {
  const [turnRight, setTurnRight] = useState(data?.turnRight || 15);

  return (
    <div
      className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1  text-sm cursor-pointer rounded w-[90%]"
      onDragStart={(e) =>
        handleDragStart(e, {
          index: generateId(),
          id: "TURN_RIGHT",
          turnRight,
        })
      }
      draggable
    >
      {"Turn Right"}
      <input
        type="text"
        className="w-[1.5rem] mx-2 rounded text-black text-center"
        value={turnRight}
        onChange={(e) => !isNaN(e.target.value) && setTurnRight(e.target.value)}
        onFocus={(event) => event.target.select()}
      />
      {" degrees"}
    </div>
  );
};

export default TurnRight;
