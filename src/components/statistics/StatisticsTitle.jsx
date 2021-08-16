import PropTypes from 'prop-types';
import s from 'components/statistics/Statistic.module.css';

export default function StatisticsTitle({ title, children }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      {children}
    </section>
  );
}

StatisticsTitle.protoTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
