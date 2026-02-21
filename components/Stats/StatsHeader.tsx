const StatsHeader = () => {
  return (
    <div className="max-[460px]:flex-col max-[460px]:gap-5 max-[460px]:items-center w-full h-auto flex justify-between">
      <div className="flex flex-col items-start max-[460px]:items-center">
        <h2 className="font-bold text-2xl">Dashboard</h2>
        <p className="max-[460px]:text-center text-[var(--secondary-text)]">
          Overview for February 2026
        </p>
      </div>
      <button className="max-[460px]:w-full max-[670px]:w-10 w-37.5 h-9.5 bg-white rounded-lg text-black flex justify-center items-center gap-2 hover:cursor-pointer hover:bg-[#E2E2E2]">
        <span className="text-xl max-[670px]:text-2xl">+</span>
        <span className="max-[670px]:hidden max-[460px]:flex">
          {" "}
          Add Transaction
        </span>
      </button>
    </div>
  );
};

export default StatsHeader;
