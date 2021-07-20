import User from "./User.js";
import { useEffect, useState } from "react";

function UserList({ numberOfUsers, genderFilter }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = `https://randomuser.me/api/?inc=email,gender,name,picture&gender=${genderFilter}&results=${numberOfUsers}`;
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setUsers(data.results);
      });
  }, [numberOfUsers, genderFilter]);

  const newUserList = users.map((user) => {
    return <User key={user.email} userData={user} />;
  });

  return (
    <main>
      <ul>{newUserList}</ul>
    </main>
  );
}

export default UserList;
