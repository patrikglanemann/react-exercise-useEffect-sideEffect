import User from "./User.js";
import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  const url =
    "https://randomuser.me/api/?inc=email,gender,name,picture&results=10";
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        const userList = data.results;
        setUsers(userList);
      });
  }, []);

  function renderUserList() {
    const newUserList = users.map((user) => {
      return <User key={Date.now()} userData={user} />;
    });
    return newUserList;
  }

  return (
    <main>
      <ul>{renderUserList()}</ul>
    </main>
  );
}

export default UserList;
