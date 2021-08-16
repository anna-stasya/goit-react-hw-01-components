import FriendsCard from './FriendsCard';
import PropTypes from 'prop-types';
import s from 'components/friends-list/Friends.module.css';

function FriendsList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendsCard
            avatar={friend.avatar}
            isOnline={friend.isOnline}
            name={friend.name}
          />
        </li>
      ))}
    </ul>
  );
}

FriendsList.protoTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default FriendsList;
