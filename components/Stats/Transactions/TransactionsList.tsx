import FlexCenter from "../FlexCenter";
import { TransactionType } from "./Transactions";
import TransactionsCard from "./TransactionsCard";

const TransactionsList = ({ transactions }: TransactionType) => {
  return (
    <FlexCenter className="gap-3">
      {transactions.map((transaction) => (
        <TransactionsCard
          key={transaction.id}
          transactionHeader={transaction.category}
          date={transaction.date}
          transactionAmount={transaction.amount}
        />
      ))}
    </FlexCenter>
  );
};

export default TransactionsList;
