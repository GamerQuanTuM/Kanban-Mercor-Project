import { FC } from "react";
import Image from "next/image";
import {
  HomeIcon,
  MessageIcon,
  TaskIcon,
  SettingIcon,
  GroupIcon,
} from "@/utils/icon";

const SidebarNav: FC = () => {
  return (
    <ul className="my-0 mx-[13px] py-[30px] px-0 flex flex-col gap-[25px] border-b border-b-grey-light-1">
      <li className="flex font-medium text-base text-[#787486] gap-[14px] sm:ml-[9px]">
        <Image src={HomeIcon} alt="Home" />
        <span className="hidden sm:block">Homes</span>
      </li>
      <li className="flex font-medium text-base text-[#787486] gap-[14px] sm:ml-[9px]">
        <Image src={MessageIcon} alt="Home" />
        <span className="hidden sm:block">Messages</span>
      </li>
      <li className="flex font-medium text-base text-[#787486] gap-[14px] sm:ml-[9px]">
        <Image src={TaskIcon} alt="Home" />
        <span className="hidden sm:block">Tasks</span>
      </li>
      <li className="flex font-medium text-base text-[#787486] gap-[14px] sm:ml-[9px]">
        <Image src={GroupIcon} alt="Home" />
        <span className="hidden sm:block">Members</span>
      </li>
      <li className="flex font-medium text-base text-[#787486] gap-[14px] sm:ml-[9px]">
        <Image src={SettingIcon} alt="Home" />
        <span className="hidden sm:block">Settings</span>
      </li>
    </ul>
  );
};

export default SidebarNav;
