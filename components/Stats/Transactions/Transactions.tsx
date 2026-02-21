import FlexCenter from "../FlexCenter";
import { Transaction } from "../SimpleStats";
import TransactionsList from "./TransactionsList";

export type TransactionType = {
  transactions: Transaction[];
};

const Transactions = ({ transactions }: TransactionType) => {
  return (
    <FlexCenter className="gap-5 border rounded-xl p-4">
      <h2>Recent Transactions</h2>

      <TransactionsList transactions={transactions} />
    </FlexCenter>
  );
};

export default Transactions;
