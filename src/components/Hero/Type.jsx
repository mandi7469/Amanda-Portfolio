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
          "MERN Stack Developer",
          "Web Design",
          "Contact me for more info",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
