import UserList from "./components/UserList.js";
import { useState } from "react";
import "./App.css";

function App() {
  const [numberOfUsers, setNumberOfUsers] = useState(10);
  const [genderFilter, setGenderFilter] = useState("all");

  function handleNumberChange(event) {
    const numberOfUsers = event.target.value;
    setNumberOfUsers(numberOfUsers);
  }

  function handleGenderChange(event) {
    const newGenderFilter = event.target.value;
    setGenderFilter(newGenderFilter);
  }

  return (
    <div className="App">
      <header>
        <input type="number" onChange={handleNumberChange}></input>
        <select onChange={handleGenderChange}>
          <option value="all">all</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
      </header>
      <UserList numberOfUsers={numberOfUsers} genderFilter={genderFilter} />
    </div>
  );
}

export default App;
