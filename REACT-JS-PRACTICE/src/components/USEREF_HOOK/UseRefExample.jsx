import React, { useRef } from "react";

const UseRefExample = () => {
  const userNameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("submitted");
    const userName = userNameRef.current.value;
    const password = passwordRef.current.value;
    userNameRef.current.style.color = "blue";
    console.log({ userName, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">User Name : </label>
        <input type="text" id="userName" ref={userNameRef} />
      </div>
      <div>
        <label htmlFor="password">User Name : </label>
        <input type="text" id="password" ref={passwordRef} />
      </div>
      <button type="submit">submit</button>
    </form>
  );
};

export default UseRefExample;
