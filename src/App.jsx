//components
import Profile from './components/profile/Profile';
import StatisticsTitle from './components/statistics/StatisticsTitle';
import StatisticsList from './components/statistics/StatisticsList';
import FriendsList from './components/friends-list/FriendsList';
import TransactionList from './components/transaction-history/TransactionList';

//json
import user from './components/profile/user.json';
import statisticalData from './components/statistics/statistical-data.json';
import friends from './components/friends-list/friends.json';
import transactions from './components/transaction-history/transactions.json';

import s from 'components/container/Container.module.css';

//рендерим профайл карточки
export default function App() {
  return (
    <div className={s.container}>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <section className={s.container}>
        <StatisticsTitle title="Upload stats" stats={statisticalData}>
          <StatisticsList stats={statisticalData} />
        </StatisticsTitle>
      </section>

      <section className={s.container}>
        <FriendsList friends={friends} />
      </section>

      <section className={s.container}>
        <TransactionList items={transactions} />
      </section>
    </div>
  );
}
