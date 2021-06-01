import React, { useContext, useEffect } from "react";
import tw, { styled } from "twin.macro";
import SunMoon from "./SunMoon";
import { ThemeContext } from "../types.models";
import { BurgerProps } from "../types.models";
import Link from "next/link";

const NavLinks = styled.div<BurgerProps>`
  ${tw`  fixed text-black dark:text-whiteCream`}

  background-color: ${(p) => (p.darkMode ? `black` : `white`)};

  height: 100vh;
  text-decoration: none;
  top: 0;
  right: 0;
  position: fixed;
  z-index: 10;
  list-style: none;
  width: ${(props) => (props.open ? "100%" : 0)};
  opacity: ${(props) => (props.open ? 1 : 0)};
  transform: translateZ(0);

  transition-property: opacity, width;
  transition-duration: 0.5s;
  transition-delay: 0.1s;
  transition-timing-function: ease-out;
  will-change: transform;
`;

const List = styled.ul<BurgerProps>`
  ${tw`  fixed  flex justify-center items-center flex-1 flex-col absolute top-1/2 left-1/2 overflow-hidden gap-4 leading-relaxed tracking-wider  `}
  opacity: 1;
  height: 100vh;
  width: ${(p) => (p.open ? "100%" : "0")};
  transition: width 0.2s;
  bottom: 50%;
  right: 0;
  transform: translate(-50%, -50%) translateZ(0);
  font-size: clamp(0.3rem, 1.2rem, 2rem);

  > li {
    :first-child {
      opacity: ${(p) => (p.open ? "1" : "0")};
      transform: ${(p) =>
        p.open
          ? "translateX(0) translateZ(0)"
          : "translateX(30px) translateZ(0)"};
      will-change: transform;
      transition: opacity 100ms 500ms ease-out, transform 300ms 500ms ease-out;
    }
    :nth-child(2) {
      opacity: ${(p) => (p.open ? "1" : "0")};
      transform: ${(p) =>
        p.open
          ? "translateX(0) translateZ(0)"
          : "translateX(30px) translateZ(0)"};
      will-change: transform;
      transition: opacity 100ms 600ms ease-out, transform 300ms 600ms ease-out;
    }
    :nth-child(3) {
      opacity: ${(p) => (p.open ? "1" : "0")};
      transform: ${(p) =>
        p.open
          ? "translateX(0) translateZ(0)"
          : "translateX(30px) translateZ(0)"};
      will-change: transform;
      transition: opacity 100ms 700ms ease-out, transform 300ms 700ms ease-out;
    }
    :nth-child(4) {
      opacity: ${(p) => (p.open ? "1" : "0")};
      will-change: transform;
      transform: ${(p) =>
        p.open
          ? "translateX(0) translateZ(0)"
          : "translateX(30px) translateZ(0)"};
      transition: opacity 100ms 800ms ease-out, transform 300ms 800ms ease-out;
    }
    :nth-child(5) {
      opacity: ${(p) => (p.open ? "1" : "0")};
      will-change: transform;
      transform: ${(p) =>
        p.open
          ? "translateX(0) translateZ(0)"
          : "translateX(30px) translateZ(0)"};
      transition: opacity 100ms 800ms ease-out, transform 300ms 800ms ease-out;
    }
    :nth-child(6) {
      opacity: ${(p) => (p.open ? "1" : "0")};
      will-change: transform;
      transform: ${(p) =>
        p.open
          ? "translateY(0) translateZ(0)"
          : "translateY(30px) translateZ(0)"};
      transition: opacity 100ms 900ms ease-out, transform 300ms 900ms ease-out;
    }
  }
`;

const Menu: React.FC<BurgerProps> = ({ open, setOpen, disabledNav }) => {
  useEffect(() => {
    //useEffect for removing scroll on menu toggle
    //Must use on mounted page as  NextJS is server side rendering
    //document doesnt exist until after the page is fully loaded
    const reloadScrollBars = () => {
      document.documentElement.style.overflow = "auto";
    };
    const unloadScrollBars = () => {
      document.documentElement.style.overflow = "hidden";
    };
    open ? unloadScrollBars() : reloadScrollBars();
  }, [open]);

  const { darkMode } = useContext(ThemeContext);

  return (
    <NavLinks {...{ open, darkMode }}>
      {/*empty divs for clicking off of the menu*/}
      <div
        tw={
          "w-9 h-4 bg-black  px-48 py-24 absolute top-0 left-0 z-50 opacity-0"
        }
        onClick={() => setOpen(!open)}
      />
      <List open={open}>
        <li>
          <Link href="/" tw={"py-4 px-16"}>
            {disabledNav === "home" ? (
              <p tw={"text-gray-500"}>HOME</p>
            ) : (
              <a>HOME</a>
            )}
          </Link>
        </li>

        <li>
          <Link href="/remembertodo" tw={"py-4 px-16"}>
            {disabledNav === "project" ? (
              <p tw={"text-gray-500"}>PROJECTS</p>
            ) : (
              <a>PROJECTS</a>
            )}
          </Link>
        </li>
        <li>
          <Link href="/art" tw={"py-4 px-16"}>
            {disabledNav === "art" ? (
              <p tw={"text-gray-500"}>ART</p>
            ) : (
              <a>ART</a>
            )}
          </Link>
        </li>
        <li>
          <Link href="/contact" tw={"py-4 px-16"}>
            {disabledNav === "contact" ? (
              <p tw={"text-gray-500"}>CONTACT</p>
            ) : (
              <a>CONTACT</a>
            )}
          </Link>
        </li>
        <li>
          <SunMoon />
        </li>
      </List>
      <div
        tw={
          "w-9 h-8 bg-black  px-48 py-24 absolute bottom-0 left-0 z-50 opacity-0 "
        }
        onClick={() => setOpen(!open)}
      />
    </NavLinks>
  );
};

export default Menu;
