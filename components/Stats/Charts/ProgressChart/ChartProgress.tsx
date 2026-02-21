import ChartProgressCard from "./ChartProgressCard";

const ChartProgress = () => {
  return (
    <div className="w-full rounded-xl h-auto p-4 border border-[var(--border-color-primary)] gap-5 flex flex-col">
      <h2>Budget Progress</h2>

      <div className="w-full h-auto flex flex-col items-start justify-start gap-5">
        <ChartProgressCard />
        <ChartProgressCard />
        <ChartProgressCard />
      </div>
    </div>
  );
};

export default ChartProgress;
