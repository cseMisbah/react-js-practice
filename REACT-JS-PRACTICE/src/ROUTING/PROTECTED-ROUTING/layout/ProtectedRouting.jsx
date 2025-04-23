import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRouting = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/" replace></Navigate>;
  } else {
    return children;
  }
  return <div>ProtectedRouting</div>;
};

export default ProtectedRouting;
