import React from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  // console.log(sortOrder);
  // console.log(users);
  return (
    <>
      <h1>User</h1>

      <Link href="/users/new" className="btn">
        New User
      </Link>
      {/* <p> {new Date().toLocale TimeString()}</p> */}
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
