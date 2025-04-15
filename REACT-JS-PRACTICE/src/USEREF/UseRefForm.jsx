import React, { useRef } from "react";

const UseRefForm = () => {
  const userNameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userName = userNameRef.current.value;
    const userPassword = passwordRef.current.value;
    console.log(userName, userPassword);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">UserName :</label>
          <input type="text" id="userName" ref={userNameRef} />
        </div>
        <div>
          <label htmlFor="password">Password :</label>
          <input type="text" id="password" ref={passwordRef} />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default UseRefForm;
