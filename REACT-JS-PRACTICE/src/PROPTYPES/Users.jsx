import React, { useState } from "react";
import User from "./User";

const Users = () => {
  const [user, setUser] = useState({
    id: 1302020017,
    name: "anisul islam",
  });
  return (
    <div>
      <User user={user}></User>
    </div>
  );
};

export default Users;
