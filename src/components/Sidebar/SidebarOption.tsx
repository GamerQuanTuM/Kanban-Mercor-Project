import { FC } from "react";
import Image from "next/image";

import { SidebarCard, SidebarListOption } from "@/utils/index";
import { AddIcon } from "@/utils/icon";



const listOption = [
  {
    id: 1,
    color: "bg-green-500",
    text: "Mobile App",
  },
  {
    id: 2,
    color: "bg-orange-500",
    text: "Website Redesign",
  },
  {
    id: 3,
    color: "bg-purple-200",
    text: "Design System",
  },
  {
    id: 4,
    color: "bg-blue-400",
    text: "Wireframes",
  },
];

const SidebarOption: FC = () => {
  return (
    <>
      <header className="hidden sm:flex justify-between items-center mt-[30px] mb-5 mx-[22px]">
        <span className="text-xs text-[#787486] font-bold">MY PROJECTS</span>
        <Image src={AddIcon} alt="add" />
      </header>

      <ul className="hidden sm:flex flex-col gap-[10px]">
        {listOption.map((list) => (
          <SidebarListOption
            key={list.id}
            id={list.id}
            color={list.color}
            text={list.text}
          />
        ))}
      </ul>
      <SidebarCard />
    </>
  );
};

export default SidebarOption;
