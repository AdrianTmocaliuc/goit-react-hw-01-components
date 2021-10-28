import PropTypes from "prop-types";

import s from "./FriendList.module.css";

import { FriendListItems } from "./FriendListItems/FriendListItems.jsx";

export const FriendList = ({ friends }) => {
  // const elements = friends.map(item => )
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, ...friends }) => (
        <FriendListItems key={id} {...friends} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
