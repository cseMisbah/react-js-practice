import React from "react";
import PropTypes from "prop-types";

//console.log(PropTypes);

const User = (props) => {
  console.log(props.user);
  return (
    <div>
      <h1>{props.user.id}</h1>
      <h3>{props.user.name}</h3>
    </div>
  );
};

User.PropTypes = {
  //key-value
  user: PropTypes.object.shape(),
  Id:,
  name: 
};

export default User;
