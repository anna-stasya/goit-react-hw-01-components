import PropTypes from 'prop-types';
import s from './Statistic.module.css';

export default function Statistics({ label, percentage }) {
  return (
    <section className={s.statistics}>
      <ul className={s.statList}>
        <li className={s.item}>
          <span className={s.label}>{label}</span>
          <span className={s.percentage}>{percentage}%</span>
        </li>
      </ul>
    </section>
  );
}

Statistics.protoTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
