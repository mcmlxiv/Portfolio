import React, { useContext } from "react";
import { styled } from "twin.macro";
import { ThemeContext } from "../types.models";
import { BurgerProps } from "../types.models";

const MobileMenuIcon = styled.div<BurgerProps>`
  margin: auto 0 auto auto;
  transition: all 0.1s linear;

  padding: 2rem 0.5rem 2rem 2rem;
  z-index: 100;

  > div {
    //this will select all children divs
    //menu icon
    height: 2px;
    background: ${(p) =>
      p.open
        ? `${p.darkMode ? "white" : "black"}`
        : `${p.darkMode ? "white" : "black"}`};
    margin: 5px 0;
    border-radius: 14px;
    position: relative;
    transform-origin: 1px;
    transition: all 0.2s linear;

    :first-child {
      bottom: ${(p) => (p.open ? "2px" : "0")};
      transform: ${(p) => (p.open ? "rotate(40deg) " : "rotate(0) ")};
    }
    :nth-child(2) {
      opacity: ${(p) => (p.open ? "0" : "1")};
      transform: ${(p) => (p.open ? "translateX(30px)" : "translateX(0)")};
    }
    :nth-child(3) {
      width: ${(p) => (p.open ? "2.25rem" : "0.75rem")};
      top: ${(p) => (p.open ? "5px" : "0")};
      transform: ${(p) => (p.open ? "rotate(-40deg)" : "rotate(0)")};
    }
  }
`;
const Hamburger: React.FC<BurgerProps> = ({ open, setOpen }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <MobileMenuIcon onClick={() => setOpen(!open)} {...{ open, darkMode }}>
        <div tw={"w-9 "} />
        <div tw={"w-6 "} />
        <div tw={"w-3  "} />
      </MobileMenuIcon>
    </>
  );
};

export default Hamburger;
