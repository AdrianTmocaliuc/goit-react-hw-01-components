import PropTypes from "prop-types";

import s from "./FriendList.module.css";

import { FriendListItems } from "./FriendListItems/FriendListItems.jsx";

export const FriendList = (props) => {
  let dr = 2;
  console.log(props);
  return (
    <ul className={s.friendList}>
      {dr}
      <button onClick={() => dr++}> Click</button>
      {props.friends.map(({ id, ...friends }) => (
        <FriendListItems key={id} {...friends}>
          {/* props.children */}
          <span>_text</span>
        </FriendListItems>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
