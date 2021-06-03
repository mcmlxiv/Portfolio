import React, { Dispatch, SetStateAction, useContext } from "react";
import { styled, css } from "twin.macro";
import { ThemeContext } from "../types.models";

const MenuIcon = css`
  margin: auto 0 auto auto;
  transition: all 0.1s linear;
  transform: translateY(3px);

  padding: 2rem 0.5rem 2rem 2rem;
`;
const PlusMinusIcon = styled.div<panel>`
  ${MenuIcon}

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
    will-change: auto;

    :first-child {
      bottom: ${(p) => (p.open ? "2px" : "0")};
      transform: ${(p) =>
        p.open ? "rotate(0) " : "rotate(90deg) translateX(-4px)"};
      will-change: auto;
    }
    :nth-child(2) {
      opacity: ${(p) => (p.open ? "0" : "1")};
      transform: ${(p) =>
        p.open
          ? " translateX(-5px) translateY(-6px)"
          : "translateX(-5px) translateY(-6px)"};
      will-change: auto;
    }
  }
`;

{
  /*const Hamburger: React.FC<BurgerProps> = ({ open, setOpen }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <MobileMenuIcon onClick={() => setOpen(!open)} {...{ open, darkMode }}>
        <div tw={"w-3 "} />
        <div tw={"w-3 "} />
      </MobileMenuIcon>
    </>
  );
};

export default Hamburger;*/
}

interface panel {
  panel: string;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  darkMode: boolean;
  open?: boolean;
}
export const PlusLang: React.FC<panel> = ({ panel }) => {
  const { darkMode } = useContext(ThemeContext);

  const open = panel === "Language";
  return (
    <>
      <PlusMinusIcon {...{ panel, darkMode, open }}>
        <div tw={"w-3 "} />
        <div tw={"w-3 "} />
      </PlusMinusIcon>
    </>
  );
};

export const PlusFramework: React.FC<panel> = ({ panel }) => {
  const { darkMode } = useContext(ThemeContext);
  const open = panel === "Framework";

  return (
    <>
      <PlusMinusIcon {...{ panel, darkMode, open }}>
        <div tw={"w-3 "} />
        <div tw={"w-3 "} />
      </PlusMinusIcon>
    </>
  );
};
export const PlusDatabase: React.FC<panel> = ({ panel }) => {
  const { darkMode } = useContext(ThemeContext);
  const open = panel === "Database";

  return (
    <>
      <PlusMinusIcon {...{ panel, darkMode, open }}>
        <div tw={"w-3 "} />
        <div tw={"w-3 "} />
      </PlusMinusIcon>
    </>
  );
};

export const PlusService: React.FC<panel> = ({ panel }) => {
  const { darkMode } = useContext(ThemeContext);
  const open = panel === "Services";

  return (
    <>
      <PlusMinusIcon {...{ panel, darkMode, open }}>
        <div tw={"w-3 "} />
        <div tw={"w-3 "} />
      </PlusMinusIcon>
    </>
  );
};
