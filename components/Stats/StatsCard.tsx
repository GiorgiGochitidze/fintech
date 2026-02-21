import { ReactNode } from "react";

type PropsType = {
  svg: ReactNode;
  color: string;
  heading: string;
  price: string;
  priceColor: string;
};

const StatsCard = ({ svg, color, heading, price, priceColor }: PropsType) => {
  return (
    <div
      className={`min-w-50 max-[710px]:max-w-none max-[460px]:max-w-none flex-1 max-w-65 p-4.5 text-card-foreground flex flex-col gap-6 rounded-xl border ${color}`}
    >
      <div className="w-full h-auto flex justify-between items-center">
        <p className="text-xs text-[var(--secondary-text)]">{heading}</p>
        {svg}
      </div>

      <p className={`text-2xl font-bold ${priceColor}`}>
        ${price}
      </p>
    </div>
  );
};

export default StatsCard;
