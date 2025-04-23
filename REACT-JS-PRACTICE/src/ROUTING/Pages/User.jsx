import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const User = () => {
  //for query we can use useSearchParams
  const [searchParams, setSearchParams] = useSearchParams();
  //console.log(searchParams.get("id"));
  //console.log(searchParams.get("age"));
  //console.log(searchParams.get("name"));
  //const { userid } = useParams();
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ name: name });
  };
  return (
    <div>
      <h1>User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button type="submit">Find User</button>
      </form>

      {/*
      User{userid}*
      <h1>{searchParams.get("id")}</h1>
      <h1>{searchParams.get("name")}</h1>
      <h1>{searchParams.get("age")}</h1>
      */}
    </div>
  );
};

export default User;
