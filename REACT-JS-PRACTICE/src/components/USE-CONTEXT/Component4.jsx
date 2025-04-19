import React, { useContext } from "react";
import { UserContext } from "./UseContext";

const Component4 = () => {
  const userData = useContext(UserContext);
  const { user } = userData;

  return (
    <div>
      <h3>{user.id}</h3>
      <h3>{user.name}</h3>
    </div>
  );
};

export default Component4;
