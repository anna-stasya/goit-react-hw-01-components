import Statistics from './Statistics';
import PropTypes from 'prop-types';
import s from 'components/statistics/Statistic.module.css';

function StatisticsList({ stats }) {
  return (
    <ul className={s.statList}>
      {stats.map(stat => (
        <li className={s.item} key={stat.id}>
          <Statistics label={stat.label} percentage={stat.percentage} />
        </li>
      ))}
    </ul>
  );
}

StatisticsList.protoTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default StatisticsList;
