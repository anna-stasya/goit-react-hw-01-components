import PropTypes from 'prop-types';
import s from './Transaction.module.css';

export default function TransactionHistory({ type, amount, currency }) {
  return (
    <tr className={s.table}>
      <td className={s.columnTable}>{type}</td>
      <td className={s.columnTable}>{amount}</td>
      <td className={s.columnTable}>{currency}</td>
    </tr>
  );
}

TransactionHistory.protoTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
