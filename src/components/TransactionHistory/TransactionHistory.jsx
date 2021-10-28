import s from "./TransactionHistory.module.css";

import { Transiction } from "./TransactionHistoryList/TransactionHistoryLis.jsx";

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, ...transactions }) => (
          <Transiction key={id} {...transactions} />
        ))}
      </tbody>
    </table>
  );
};
