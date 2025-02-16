import React from "react";
/*
const todoTitle = "call family";
const todoDesc =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, voluptates.";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();
*/
export const index = (props) => {
  //console.log(props);
  const { titleText, descText } = props;
  return (
    <div className="card">
      <h1 className="cardTitle">{titleText}</h1>
      <p className="cardDesc">{descText}</p>
      <p className="cardFooter">
        {/*dateName + "/" + monthName + "/" + currentYear*/}
      </p>
    </div>
  );
};
export default index;

/*
export const index = (props) => {
  console.log(props);
  return (
    < className="card">
      <h1 className="cardTitle">{props.titleText}</h1>
      <p className="cardDesc">{props.descText}</p>
      < className="cardFooter">
        {dateName + "/" + monthName + "/" + currentYear}
  
    
  );
};


import React from "react";
import "./style.css";
export default function CARD() {
  const todoTitle = "Call Family";
  const todoDesc =
    "Ipsum no sea sadipscing consetetur vero. Nonumy justo diam sed lorem sit, sed sit clita sit takimata sed sanctus invidunt.";
  const fullDate = new Date();
  const date =
    fullDate.getDate() +
    "/" +
    fullDate.getMonth() +
    "/" +
    fullDate.getFullYear();

  return (
    <div>
      <div className="card-style">
        <h3>{todoTitle}</h3>
        <p>{todoDesc}</p>
        <p>{date}</p>
      </div>
    </div>
  );
}
*/
