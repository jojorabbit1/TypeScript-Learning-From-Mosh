import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="navbar bg-blue-200  mb-5 p-3">
      <div className="flex-1 ">
        {/* <a className="btn btn-ghost normal-case text-xl">MyNavBar</a> */}
        <Link className="btn btn-ghost normal-case text-xl" href="/">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" href="/users">
          User
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
