import PropTypes from "prop-types";

import s from "../FriendList.module.css";

export const FriendListItems = ({ name, avatar, isOnline, children }) => {
  return (
    <li className={s.item}>
      <span
        className={`${s.status} ${isOnline ? s.isOnline : s.isOfline}`}
      ></span>
      <img
        className={s.avatar}
        src={
          avatar
            ? avatar
            : "https://cdn-icons-png.flaticon.com/512/616/616438.png"
        }
        alt={name}
        width="48"
      />
      <p className={s.name}>{name}</p>
      {children}
    </li>
  );
};

FriendListItems.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
