import PropTypes from "prop-types";

import s from "../TransactionHistory.module.css";

export const TransictionItem = ({ type, amount, currency }) => {
  return (
    <tr className={s.transactionItem}>
      <td className={s.type}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransictionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
