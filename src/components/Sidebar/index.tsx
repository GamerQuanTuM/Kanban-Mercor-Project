import { FC } from "react";
import { SidebarHeader, SidebarNav, SidebarOption } from "@/utils/index";

const Sidebar: FC = () => {
  return (
    <div className="flex-1 border-r sticky top-0 left-0 border-gray-300 min-h-screen bg-white w-[50px] sm:min-w-[250px] xl:min-w-[280px]">
      {/* Header */}
      <SidebarHeader />

      {/* Navigation */}
      <SidebarNav />

      {/* Options */}
      <SidebarOption />
    </div>
  );
};

export default Sidebar;
