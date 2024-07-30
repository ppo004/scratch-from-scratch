import React from "react";
import { handleDragStart } from "../../../Utilities/DragEvents";
import { generateId } from "../../../Utilities/MoveAnimations";

const Hide = () => {
  return (
    <div
      className="flex flex-row flex-wrap bg-pink-500 text-white px-2 py-1  text-sm cursor-pointer rounded w-[90%] looks"
      id="look3"
      draggable
      onDragStart={(e) =>
        handleDragStart(e, { index: generateId(), id: "HIDE" })
      }
    >
      Hide
    </div>
  );
};

export default Hide;
