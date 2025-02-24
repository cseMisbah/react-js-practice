import React from "react";

const Child = (props) => {
  const data = "I am from child component";
  props.onChildData(data);
  return (
    <div>
      <p>{props.data1}</p>
    </div>
  );
};

export default Child;
/*
import React, { useState } from "react";
import Child from "./STATE_LIFTING/Child";

const App = () => {
  const data = "I am from parant app";

  const handleChildData = (childData) => {
    console.log(childData);
  };

  return (
    <div>
      <Child data1={data} onChildData={handleChildData}></Child>
    </div>
  );
};

export default App;
*/
