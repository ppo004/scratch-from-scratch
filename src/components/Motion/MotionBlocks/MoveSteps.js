import React, { useState } from "react";
import { handleDragStart } from "../../../Utilities/DragEvents";
import { generateId } from "../../../Utilities/MoveAnimations";

const MoveSteps = ({ data }) => {
  const [steps, setSteps] = useState(data?.steps || 10);

  return (
    <div
      className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1  text-sm cursor-pointer rounded w-[90%]"
      draggable
      onDragStart={(e) => {
        handleDragStart(e, {
          index: generateId(),
          id: "MOVE_STEPS",
          steps,
        })
      }
      }
    >
      Move{" "}
      <input
        type="text"
        className="w-[1.5rem] mx-2 rounded text-black text-center"
        value={steps}
        onChange={(e) => !isNaN(e.target.value) && setSteps(e.target.value)}
        onFocus={(event) => event.target.select()}
      />{" "}
      Steps
    </div>
  );
};

export default MoveSteps;
