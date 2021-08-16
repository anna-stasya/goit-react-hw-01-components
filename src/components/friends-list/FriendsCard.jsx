import PropTypes from 'prop-types';
import s from 'components/friends-list/Friends.module.css';

export default function Friends({ isOnline, avatar, name }) {
  return (
    <div>
      <ul className={s.friendList}>
        <li className={s.item}>
          <span className={isOnline ? s.online : s.offline}>{isOnline}</span>
          <img className={s.avatar} src={avatar} alt={name} width="48" />
          <p className={s.name}>{name}</p>
        </li>
      </ul>
    </div>
  );
}

Friends.protoTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
