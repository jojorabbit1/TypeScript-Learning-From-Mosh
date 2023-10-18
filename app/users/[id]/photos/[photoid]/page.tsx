import React from "react";

interface Props {
  params: { id: number; photoid: number };
}

const UsersPhoto = ({ params: { id, photoid } }: Props) => {
  return (
    <div>
      UsersPhoto {id} {photoid}
    </div>
  );
};

export default UsersPhoto;
