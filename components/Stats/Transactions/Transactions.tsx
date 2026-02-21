import FlexCenter from "../FlexCenter";
import TransactionsList from "./TransactionsList";

const Transactions = () => {
  return (
    <FlexCenter className="gap-5 border rounded-xl p-4">
      <h2>Recent Transactions</h2>

      <TransactionsList />

    </FlexCenter>
  );
};

export default Transactions;
