import React, { memo } from "react";

const Message = () => {
  console.log("message is rendering");
  return <p>send 0 messages</p>;
};

export default Message;

/*
const App = () => {
  const [count, setCount] = useState(0);
  console.log("app is rendering ");
  return (
    <div>
      <h1>count : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increment
      </button>
      <Message></Message>
    </div>
  );
};

export default App;
*/
