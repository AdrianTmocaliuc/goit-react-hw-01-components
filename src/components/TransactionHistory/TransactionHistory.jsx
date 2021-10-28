import PropTypes, { arrayOf } from "prop-types";

import s from "./TransactionHistory.module.css";

import { Transiction } from "./TransactionHistoryList/TransactionHistoryLis.jsx";

export const TransactionHistory = ({ items }) => {
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
        {items.map(({ id, ...items }) => (
          <Transiction key={id} {...items} />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
