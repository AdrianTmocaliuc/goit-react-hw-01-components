import s from "../TransactionHistory.module.css";

export const Transiction = ({ type, amount, currency }) => {
  return (
    <tr className={s.transactionItem}>
      <td className={s.type}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};
