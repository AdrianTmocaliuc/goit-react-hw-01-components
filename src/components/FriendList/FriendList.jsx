import s from "./FriendList.module.css";

import {FriendListItems}  from "./FriendListItems/FriendListItems.jsx";

export const FriendList = ({ friends }) => {
    // const elements = friends.map(item => )
    return (
        <ul className={s.friendList}>
            {friends.map(({ id, ...friends}) =>
                <FriendListItems key={id}
                    {...friends}
                    />
            )}
            {/* <FriendListItems arrItems={friends}/> */}
        </ul>
    )
}