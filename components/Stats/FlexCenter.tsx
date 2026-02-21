import { ReactNode } from "react";

type FlexTypes = {
  children: ReactNode;
  className?: string;
};

const FlexCenter = ({ children, className }: FlexTypes) => (
  <div
    className={`w-full h-auto flex flex-col items-start justify-start ${className}`}
  >
    {children}
  </div>
);

export default FlexCenter;
