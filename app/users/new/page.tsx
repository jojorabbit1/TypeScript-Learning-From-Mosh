"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NewUserPage = () => {
  const router = useRouter();

  return (
    <>
      <div>NewUserPage</div>
      <button className="btn btn-primary" onClick={() => router.push("/users")}>
        Submit
      </button>
    </>
  );
};

export default NewUserPage;
