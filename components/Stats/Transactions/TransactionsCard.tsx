const TransactionsCard = () => {
  return (
    <div className="max-[460px]:flex-col max-[460px]:items-start w-full h-auto p-2 justify-between pr-3 items-center flex bg-[#121212] rounded-sm h-25">
      <div className="w-auto h-auto flex items-center justify-start gap-2">
        <div className="w-10 h-12.5 flex justify-center items-center">
          <div className="w-8 h-8 flex justify-center items-center rounded-full bg-[#0A0A0A]">
            <span className="mb-1">💼</span>
          </div>
        </div>

        <div className="text-sm">
          <p>Tech Company Inc</p>
          <p className="text-xs text-[#5C5C5C]">Feb 20</p>
        </div>
      </div>
      <p className="max-[460px]:ml-auto font-bold text-sm text-[var(--transactions-income)]">+$5000.00</p>
    </div>
  );
};

export default TransactionsCard;
