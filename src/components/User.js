import "./User.css";

function User({ users }) {
  return (
    <>
      {users.map((user) => (
        <li
          key={Date.now()}
          className={`Userlist__item ${user.gender}`}
        >{`${user.name.title}: ${user.name.first} ${user.name.last}`}</li>
      ))}
    </>
  );
}

export default User;
