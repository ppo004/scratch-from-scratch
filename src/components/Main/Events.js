import React, { useContext } from "react";
import Icon from "../Icon";
import { DragDropContext } from "../../Context/DragDropContext";
import { SpritePositionContext } from "../../Context/SpritePosition";

const Events = () => {
  const { blocksState, setBlocksState } = useContext(DragDropContext);
  const { spritePosition, setSpritePosition } = useContext(SpritePositionContext);
  const handleStartAnimation = () => {
      
  }
  return (
    <>
      <div className="font-bold text-center w-[90%]"> Events </div>
      <div
        className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1  text-sm cursor-pointer rounded w-[90%]"
        onClick={handleStartAnimation}
      > When
        <Icon name="flag" size={15} className="text-green-600 mx-2" />
        clicked
      </div>
    </>
  );
};

export default Events;
