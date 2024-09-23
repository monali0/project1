import React from "react";

function Greeting() {
  // //create react app from scratch
  // // show a heading that says hello mam, good morning.
  // // Good AfterNoon , if 12pm to 7pm
  // //Good Night, if 7pm till midnight
  // // Apply css in it, then dynamically change the color
  // // of Greeting parts only using css style. Ex. Green,orange,black etc.

  let curDate = new Date();
  curDate = curDate.getHours();
  const cssStyle = {};

  let greetings = "";
  if (curDate >= 1 && curDate <= 12) {
    greetings = "Good Morning Dude";
    cssStyle.color = "Green";
  } else if (curDate >= 12 && curDate <= 19) {
    greetings = "Good Afternoon Dear";
    cssStyle.color = "Red";
  } else {
    greetings = "Good Night sona";
    cssStyle.color = "Pink";
  }
  return (
    <h1>
      {" "}
      Hii Puja <span style={cssStyle}>{greetings} </span>{" "}
    </h1>
  ); 
}
export default Greeting;
