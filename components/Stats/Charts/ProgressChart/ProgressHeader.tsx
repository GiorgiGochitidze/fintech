const ProgressHeader = () => {
  return (
    <div className="max-[350px]:flex-col max-[375px]:items-start w-full flex items-center gap-2 justify-between">
      <div className="flex justify-center items-center gap-2">
        <div className="w-2.5 h-2.5 rounded bg-[#F59E0B]"></div>
        <p>Food & Dining</p>
      </div>
      <p className="text-xs text-[var(--income-text)]">On Track</p>
    </div>
  );
};

export default ProgressHeader;
