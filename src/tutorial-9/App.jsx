import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      let response = await fetch(
        "https://619b9d0727827600174456df.mockapi.io/users"
      );
      let usersData = await response.json();
      setUsers(usersData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={getUsers}>Get users</button>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} {user.surname}
        </li>
      ))}
    </div>
  );
}

export default App;
