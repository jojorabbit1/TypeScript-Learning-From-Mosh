import { link } from "fs";
import React from "react";

interface User {
  id: number;
  name: String;
  email: String;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-cache", // if we diable catch our page become render dynamic,, and if we enable cache our page become render static
  });
  const users: User[] = await res.json();
  // console.log(users);
  return (
    <>
      <h1>User</h1>
      <p> {new Date().toLocaleTimeString()}</p>
      <table className="table table-xs">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
        {/* {users.map((user) => (
          <li key={user.id}> {user.name}</li>
        ))} */}
      </table>
    </>
  );
};

export default UsersPage;
