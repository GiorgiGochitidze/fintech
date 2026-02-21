import ChartBar from "./Charts/ChartBar";
import ChartPie from "./Charts/ChartPie";
import ChartProgress from "./Charts/ProgressChart/ChartProgress";
import StatsCard from "./StatsCard";
import Transactions from "./Transactions/Transactions";

const SimpleStats = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-10 justify-center">
      <div className="max-[460px]:flex-col max-[460px]:gap-5 max-[460px]:items-center w-full h-auto flex justify-between">
        <div className="flex flex-col items-start max-[460px]:items-center">
          <h2 className="font-bold text-2xl">Dashboard</h2>
          <p className="max-[460px]:text-center text-[var(--secondary-text)]">
            Overview for February 2026
          </p>
        </div>
        <button className="max-[460px]:w-full max-[670px]:w-10 w-37.5 h-9.5 bg-white rounded-lg text-black flex justify-center items-center gap-2 hover:cursor-pointer hover:bg-[#E2E2E2]">
          <span className="text-xl max-[670px]:text-2xl">+</span><span className="max-[670px]:hidden max-[460px]:flex"> Add Transaction</span>
        </button>
      </div>

      <div className="w-full h-auto flex justify-between items-center gap-3 flex-wrap max-[460px]:justify-center">
        <StatsCard
          priceColor="text-green-700 dark:text-green-400"
          heading="Total Income"
          price="5,000.00"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-trending-up text-[var(--secondary-text)]"
              aria-hidden="true"
            >
              <path d="M16 7h6v6"></path>
              <path d="m22 7-8.5 8.5-5-5L2 17"></path>
            </svg>
          }
          color={
            "border-green-200 bg-green-50 dark:bg-green-900/10 dark:border-green-800"
          }
        />

        <StatsCard
          heading="Total Expenses"
          priceColor="text-red-700 dark:text-red-400"
          price="156.10-"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-trending-down text-[var(--secondary-text)]"
              aria-hidden="true"
            >
              <path d="M16 17h6v-6"></path>
              <path d="m22 17-8.5-8.5-5 5L2 7"></path>
            </svg>
          }
          color={
            "border-red-200 bg-red-50 dark:bg-red-900/10 dark:border-red-800"
          }
        />

        <StatsCard
          priceColor="text-green-700 dark:text-green-400"
          heading="Net Amount"
          price="4,843.90"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-wallet text-[var(--secondary-text)]"
              aria-hidden="true"
            >
              <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
              <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
            </svg>
          }
          color={
            "border-green-200 bg-green-50 dark:bg-green-900/10 dark:border-green-800"
          }
        />

        <StatsCard
          priceColor="text-blue-700 dark:text-blue-400"
          heading="Budget Remaining"
          price="693.90"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-dollar-sign text-[var(--secondary-text)]"
              aria-hidden="true"
            >
              <line x1="12" x2="12" y1="2" y2="22"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          }
          color={
            "border-blue-200 bg-blue-50 dark:bg-blue-900/10 dark:border-blue-800"
          }
        />
      </div>

      <div className="max-[925px]:flex-col w-full h-auto flex gap-5 justify-center items-stretch">
        <ChartBar />

        <ChartPie />
      </div>

      <div className="max-[925px]:flex-col w-full h-auto flex gap-5 justify-center items-stretch">
        <ChartProgress />

        <Transactions />
      </div>
    </div>
  );
};

export default SimpleStats;
