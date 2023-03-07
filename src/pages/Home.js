import React from "react";
import Contact from "./Contact";

const Home = (props) => {
  const handleColorChange = () => {
    console.log("Button Clicked");
    props.setColor("#000000");
  };

  return (
    <>
      <div>
        <h1 style={{ color: props.c }}>{props.text}</h1>
        <button onClick={handleColorChange}>Change Text Color to Black</button>
      </div>
      <Contact />
    </>
  );
};

export default Home;