const SidebarLogo = () => {
  return (
    <div className=" flex items-center max-[600px]:justify-center gap-2 w-full h-auto p-3 border-b border-[#262626]">
      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
        <span className="text-black font-bold">$</span>
      </div>
      <span className="max-[600px]:hidden font-semibold text-lg">FinanceApp</span>
    </div>
  );
};

export default SidebarLogo;
