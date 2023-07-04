import { FC } from "react";
import Image from "next/image";
import {
  EditIcon,
  LinkIcon,
  CreateIcon,
  FilterIcon,
  DateIcon,
  GridIcon,
  PauseIcon,
  ShareIcon,
  ArrowDownIcon,
  Person1,
  Person2,
  Person3,
  Person4,
} from "@/utils/icon";

const ImageCard = ({ src, alt }: { src: string; alt: string }) => (
  <>
    <Image
      className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
      src={src}
      alt={alt}
    />
  </>
);

const Header: FC = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-4 lg:flex-row lg:justify-between items-center lg:gap-0 mt-10">
        <div className="flex gap-[17px] items-center md:self-start">
          <span className="font-semibold text-black -mt-3 text-3xl lg:text-[46px]">
            Mobile App
          </span>
          <Image src={EditIcon} alt="Edit" />
          <Image src={LinkIcon} alt="Link" />
        </div>
        <div className="flex items-center justify-around md:self-start">
          <Image src={CreateIcon} alt="Create" />
          <span className="text-base font-medium text-indigo-600 ml-2 mr-3 -mt-1">
            Invite
          </span>
          <div className="flex -space-x-2 overflow-hidden ">
            <ImageCard src={Person1} alt="person-1" />
            <ImageCard src={Person2} alt="person-2" />
            <ImageCard src={Person3} alt="person-3" />
            <ImageCard src={Person4} alt="person-4" />
            <div className=" flex h-10 w-10 items-center justify-center rounded-full bg-red-200 ring-2 ring-white ">
              <span className=" font-medium text-[#D25B68] ">+2</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-5 md:gap-0 lg:gap-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center border w-[122px] h-[40px] rounded-md py-4 pr-5 pl-3 border-solid border-gray-400">
            <Image src={FilterIcon} alt="FilterIcon" className="mr-3" />
            <span className="text-base mr-4">Filter</span>
            <Image src={ArrowDownIcon} alt="ArrowDownIcon" />
          </div>
          <div className="flex items-center border w-[125px] h-[40px] rounded-md py-4 pr-5 pl-3 border-solid border-gray-400">
            <Image src={DateIcon} alt="DateIcon" className="mr-3" />
            <span className="text-base mr-4">Today</span>
            <Image src={ArrowDownIcon} alt="ArrowDownIcon" />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex items-center border w-[97px] h-[40px] rounded-md py-4 pl-3 pr-3 border-solid border-gray-400">
            <Image src={ShareIcon} alt="DateIcon" className="mr-2" />
            <span className="text-base mr-4">Share</span>
          </div>
          <div className="border border-solid border-gray-400 h-[28px] mx-5"></div>
          <div className="flex items-center justify-center bg-[#5030E5] mr-5 w-[40px] h-[40px] rounded-md">
            <Image src={PauseIcon} alt="PauseIcon" />
          </div>
          <Image src={GridIcon} alt="GridIcon" />
        </div>
      </div>
    </>
  );
};

export default Header;
