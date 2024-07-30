import React, { useContext, useState } from "react";
import Events from "./Events";
import Motion from "../Motion/Motion";
import Looks from "../Looks/Looks";

export default function Sidebar() {
  return (
    <div className="w-1/2 h-[100%] py-3 border-r border-gray-200">
      <div className="h-[100%] overflow-y-auto flex flex-col items-start px-2 gap-2">
        <Events />
        <Motion />
        <Looks />
      </div>
    </div>
  );
}
