import "./task-03.css";

export function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <li key={friend.id} className="item">
          <span
            className={friend.isOnline ? "status isOnline" : "status"}
          ></span>
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}
