"use client";
import { FC } from "react";
import { useGlobalContext } from "@/store";

interface Props {
  color: string;
  text: string;
  id: number;
}

const SidebarListOption: FC<Props> = ({ color, text, id }) => {
  const { isActive, handleActive } = useGlobalContext();
  const isActiveOption = isActive === id;
  const bgColor = `w-[8px] h-[8px] rounded-full ${color}`;
  return (
    <li
      onClick={() => handleActive(id)}
      className={`flex items-center justify-between mx-3 pl-3 py-[10px] rounded-md ${
        isActiveOption ? "font-semibold bg-purple-200 bg-opacity-30" : ""
      } hover:cursor-pointer transition-all duration-200 relative`}
    >
      <div className="flex items-center justify-center">
        <div className={bgColor}></div>
        <span className="text-base ml-3">{text}</span>
      </div>
      <div
        className={`flex justify-center items-center absolute top-1/2 right-2 mr-4 transform -translate-y-1/2 ${
          isActiveOption ? "visible" : "invisible"
        }`}
      >
        <div className="w-[3px] h-[3px] rounded-full bg-black"></div>
        <div className="w-[3px] h-[3px] rounded-full bg-black mx-1"></div>
        <div className="w-[3px] h-[3px] rounded-full bg-black"></div>
      </div>
    </li>
  );
};

export default SidebarListOption;
