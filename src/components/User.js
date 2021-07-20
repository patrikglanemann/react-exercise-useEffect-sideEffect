import "./User.css";

function User({ userData }) {
  return (
    <>
      <li className={`Userlist__item Item--${userData.gender}`}>
        <img src={userData.picture.thumbnail} alt={`${userData.name.first}`} />
        {`${userData.name.title}: ${userData.name.first} ${userData.name.last}`}
      </li>
    </>
  );
}
export default User;

/*
return (
    <>
      {userData.map((user) => {
        (userData && <li key={userData.email} className={`Userlist__item ${user.gender}`}
        >{`${user.name.title}: ${user.name.first} ${user.name.last}`}</li>))};
    </>
  );*/
