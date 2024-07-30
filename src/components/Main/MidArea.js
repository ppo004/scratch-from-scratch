import React, { useContext, useState } from "react";
import getComponent from "../BlockFactory/BlockFactory";
import { DragDropContext, } from "../../Context/DragDropContext";

export default function MidArea() {
  const { blocksState, setBlocksState } = useContext(DragDropContext);

  const [state, setState] = useState(blocksState);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    
    const data = JSON.parse(e.dataTransfer.getData("text/plain"));
    let stateData = [...state, data];
    setState(stateData);
    setBlocksState(stateData);
  };

  return (
    <div
      className="w-full flex-1 h-full overflow-auto px-[10rem] py-10 flex flex-col gap-1"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h1 className="text-4xl font-bold mb-4">Mid Area</h1>
      <h5>Drag and drop here</h5>
      {state.map((item) => getComponent(item))}
    </div>
  );
}
