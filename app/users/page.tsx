import { link } from "fs";
import React from "react";
import UserTable from "./UserTable";

interface User {
  id: number;
  name: String;
  email: String;
}

interface Props {
  searchParams: { sortOrder: String };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  // console.log(sortOrder);
  // console.log(users);
  return (
    <>
      <h1>User</h1>
      <p> {new Date().toLocaleTimeString()}</p>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
