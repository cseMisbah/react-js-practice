import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
//import Card from "./components/CARD/index.jsx";

/*
const headingStyle = {
  backgroundColor: "purple",
  color: "white",
  textAlign: "center",
  padding: "15px",
};
*/

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
