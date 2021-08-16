import TransactionHistory from './TransactionHistory';
import PropTypes from 'prop-types';
import s from 'components/transaction-history/Transaction.module.css';

export default function TransactionList({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.titleAll}>
          <th className={s.title}>Type</th>
          <th className={s.title}>Amount</th>
          <th className={s.title}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <TransactionHistory
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionList.protoTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
