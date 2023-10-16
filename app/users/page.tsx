import { link } from "fs";
import React from "react";

interface User {
  id: number;
  name: String;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return (
    <>
      <h1>User</h1>
      {users.map((user) => (
        <li key={user.id}> {user.name}</li>
      ))}
    </>
  );
};

export default UsersPage;
