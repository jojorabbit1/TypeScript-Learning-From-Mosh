import { link } from "fs";
import React from "react";
import UserTable from "./UserTable";

interface User {
  id: number;
  name: String;
  email: String;
}

const UsersPage = async () => {
  // console.log(users);
  return (
    <>
      <h1>User</h1>
      <p> {new Date().toLocaleTimeString()}</p>
      <UserTable />
    </>
  );
};

export default UsersPage;
