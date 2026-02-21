import FlexCenter from "../FlexCenter";
import TransactionsCard from "./TransactionsCard";

const TransactionsList = () => {
  return (
    <FlexCenter className="gap-3">
      <TransactionsCard />
      <TransactionsCard />
      <TransactionsCard />
      <TransactionsCard />
      <TransactionsCard />
    </FlexCenter>
  );
};

export default TransactionsList;
