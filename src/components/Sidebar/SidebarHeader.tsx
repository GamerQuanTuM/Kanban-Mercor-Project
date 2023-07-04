import { FC } from "react";
import Image from "next/image";
import { Logo, Arrow } from "@/utils/icon";



const SidebarHeader: FC = () => {
  return (
    <>
      <header className="h-20 flex justify-between items-center px-[13px] sm:px-[22px]">
        <span className="flex text-xl sm:text-lg font-semibold text-black gap-[9px]">
          <Image src={Logo} alt="Project M." />
          <span className="opacity-0 md:opacity-100">Project M.</span>
        </span>
        <Image src={Arrow} alt="arrow" className="mr-3 hidden sm:block" />
      </header>

      <hr className="border-t border-gray-300" />
    </>
  );
};

export default SidebarHeader;
