import React from "react";
import UserTable from "./UserTable";

interface Props {
  searchParams: { sortOrder: string };
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
