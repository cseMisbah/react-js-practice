import React, { useState } from "react";
import User from "./User";

const Users = () => {
  const [user, setUser] = useState({
    id: 3982789,
    name: "Misbah",
  });

  return (
    <div>
      <User user={user}></User>
    </div>
  );
};

export default Users;
