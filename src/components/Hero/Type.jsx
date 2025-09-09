// imports
import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  // this component renders a typewriter effect with various text strings
  return (
    <Typewriter
      options={{
        strings: [
          "Front-End Developer",
          "Back-End Developer",
          "Website Developer & Design",
          "MERN Stack Developer",
          "Contact me for more info!",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
