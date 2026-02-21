import SidebarLogo from "./SidebarLogo";
import SidebarNav from "./SidebarNav";

const Sidebar = () => {
  return (
    <div className="max-[600px]:w-17.5 w-62.5 h-screen sticky border-r border-r-[#262626] top-0 left-0 flex flex-col items-center">
      {/* Logo */}
      <SidebarLogo />

      <SidebarNav />
    </div>
  );
};

export default Sidebar;
