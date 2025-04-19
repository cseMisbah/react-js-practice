import React, { useState } from "react";
import { UserContext } from "./UseContext";
import Component2 from "./Component2";

const Component1 = () => {
  const [user, setUser] = useState({ id: 101, name: "Anisul Islam" });
  const [text, setText] = useState("hello I am text");
  return (
    <UserContext.Provider value={{ user, text }}>
      <Component2 />
    </UserContext.Provider>
  );
};

export default Component1;
