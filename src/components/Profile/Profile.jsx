import "./Profile.css";

// console.log(data);
// {user: {name, tag}} Двойная девтрктуризация
export const Profile = ({user}) => {
    const { avatar, name, location, tag, stats} = user;
    console.log(avatar);
    return (
        <div className="profile">
            <div className="description">
                <img
                src={""}
                alt="Аватар пользователя"
                className="avatar"
                />
                <p className="name">{ name }</p>
                <p className="tag">@{tag}</p>
                <p className="location">{ location}</p>
            </div>

            <ul className="stats">
                <li>
                <span className="label">Followers</span>
                <span className="quantity">{stats.followers}</span>
                </li>
                <li>
                <span className="label">Views</span>
                    <span className="quantity">{ stats.views}</span>
                </li>
                <li>
                <span className="label">Likes</span>
                <span className="quantity">{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

// export default Profile;