import React, { useContext } from "react";
import { useState } from "react";
import { handleDragStart } from "../../../Utilities/DragEvents";
import { generateId } from "../../../Utilities/MoveAnimations";

const SayTextSeconds = ({ data }) => {
  const [sayTextWithSecs, setSayTextWithSecs] = useState(
    data?.sayTextWithSecs || "Hello!"
  );
  const [saySeconds, setSaySeconds] = useState(data?.saySeconds || 2);

  return (
    <div
      className="flex flex-row flex-wrap bg-pink-500 text-white px-2 py-1 text-sm cursor-pointer rounded w-[90%] looks"
      id="look1"
      draggable
      onDragStart={(e) =>
        handleDragStart(e, {
          index: generateId(),
          id: "SAY_TEXT_WITH_SECS",
          sayTextWithSecs,
          saySeconds,
        })
      }
    >
      Say
      <input
        type="text"
        className="w-[3rem] mx-2 rounded text-black text-center"
        value={sayTextWithSecs}
        onChange={(e) => setSayTextWithSecs(e.target.value)}
        onFocus={(event) => event.target.select()}
      />
      for
      <input
        type="text"
        className="w-[1.5rem] mx-2 rounded text-black text-center"
        value={saySeconds}
        onChange={(e) =>
          !isNaN(e.target.value) && setSaySeconds(e.target.value)
        }
        onFocus={(event) => event.target.select()}
      />
      seconds
    </div>
  );
};

export default SayTextSeconds;
