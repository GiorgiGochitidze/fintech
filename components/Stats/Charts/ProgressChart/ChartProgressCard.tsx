import ProgressBar from "./ProgressBar";
import ProgressFooter from "./ProgressFooter";
import ProgressHeader from "./ProgressHeader";

const ChartProgressCard = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-start gap-2">
      <ProgressHeader />

      <ProgressBar />

      <ProgressFooter />
    </div>
  );
};

export default ChartProgressCard;
