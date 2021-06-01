import React from "react";
import Typewriter from "typewriter-effect";
import tw, { styled } from "twin.macro";

const TypeContainer = styled.div`
  ${tw`   text-4xl flex flex-col font-semibold  relative mb-4 lg:text-8xl  min-h-0 `};
  max-height: 2.5rem;
  margin-bottom: 15rem;
  @media only screen and (min-width: 960px) {
    margin-bottom: 20rem;
  }
`;
const TypeWriter = () => {
  return (
    <TypeContainer>
      <Typewriter
        options={{
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("FULLSTACK WEB <br>DEB</br>")
            .pauseFor(300)
            .deleteChars(3)
            .typeString("DEVELOPER")
            .pauseFor(2500)
            .deleteAll()
            .typeString("TYPESCRIPT MERN <br>DEVELOPER</br>")
            .pauseFor(2500)
            .deleteAll()
            .typeString("SOFTWE")
            .pauseFor(200)
            .deleteChars(1)
            .typeString("ARE <br>ENGINEER</br>")
            .pauseFor(2500)
            .deleteAll()
            .typeString("FRENCH FRY <br>LOVER</br>")
            .pauseFor(200)
            .deleteChars(7)
            .typeString("IES <3")
            .pauseFor(2500)
            .deleteAll()
            .typeString("UI/UX<br>DESIGNER</br>")
            .pauseFor(2500)
            .deleteAll()
            .typeString("JS(TS)/HTML/CSS SPECIALIST")
            .pauseFor(1500)
            .deleteAll()
            .typeString("NEXTJJ")
            .pauseFor(200)
            .deleteChars(1)
            .typeString("JS")
            .pauseFor(100)
            .deleteChars(2)
            .typeString("S<br>DEVELOPER</br>")
            .pauseFor(2500)
            .deleteAll()
            .typeString("JAMSTACK<br>B3713V3R</br>")
            .pauseFor(100)
            .deleteChars(8)
            .typeString("BELIEVER")
            .pauseFor(200)
            .deleteChars(8)
            .typeString("DEVELOPER")
            .pauseFor(1500)
            .deleteAll()
            .typeString("R3M0")
            .pauseFor(300)
            .deleteChars(3)
            .typeString("EMOTE <br>REACT</br>ENG1")
            .pauseFor(200)
            .deleteChars(1)
            .typeString("INEER")
            .pauseFor(2500)
            .deleteAll()
            .typeString("ADOBE PS XD <br>ILLUSTRATOR</br> DESIGNER")
            .pauseFor(2500)
            .deleteAll()
            .start();
        }}
      />
    </TypeContainer>
  );
};

export default TypeWriter;
