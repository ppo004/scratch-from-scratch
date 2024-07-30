import React, { useContext, useEffect, useState } from "react";
import CatSprite from "./CatSprite";
import { DragDropContext } from "../../Context/DragDropContext";
import { SpritePositionContext } from "../../Context/SpritePosition";
import { getStyle } from "../../Utilities/MoveAnimations";

export default function PreviewArea() {
  const { blocksState } = useContext(DragDropContext);
  const { spritePosition, setSpritePosition } = useContext(
    SpritePositionContext
  );
  const [style, setStyle] = useState({
    transition: "left 0.5s, top 0.5s, transform 0.5s",
    position: "absolute",
    top: "10px",
    left: "10px",
  });
  useEffect(() => {
    getStyle(blocksState, spritePosition, setSpritePosition);
    spritePosition.map((item) =>
      setStyle((prev) => {
        return { ...prev, ...item };
      })
    );
  }, [blocksState]);

  function doubleTransformValues() {
    let bow = style;
    const transformParts = bow.transform.split(/\s+/);
    let translateXValue = 0;
    let rotateValue = 0;

    transformParts.forEach((part) => {
      const match = part.match(/translateX\((-?\d+\.?\d*)px\)/);
      if (match) {
        translateXValue = parseFloat(match[1]) * 2;
      }
      const rotateMatch = part.match(/rotate\((-?\d+\.?\d*)deg\)/);
      if (rotateMatch) {
        rotateValue = parseFloat(rotateMatch[1]) * 2;
      }
    });
    const newTransformParts = [];
    if (translateXValue !== 0) {
      newTransformParts.push(`translateX(${translateXValue}px)`);
    }
    if (rotateValue !== 0) {
      newTransformParts.push(`rotate(${rotateValue}deg)`);
    }
    setStyle((prev) => {
      return { ...prev, transform: newTransformParts.join(" ") };
    });
  }
  return (
    <div className="h-full w-full overflow-hidden p-2 relative d-flex flex-column">
      <div style={{ flexGrow: 1 }}>
        <CatSprite style={{ ...style, height: "100%", width: "auto" }} />
      </div>
      <button
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={() => doubleTransformValues()}
      >
        Replay
      </button>
    </div>
  );
}
