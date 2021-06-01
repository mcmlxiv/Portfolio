import React, { useEffect } from "react";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ThemeContext } from "../types.models";
import Meta from "../components/Meta";
import { IndexHeader } from "../components/HeaderParts";
import { IndexMain } from "../components/MainParts";
import CookieWarn from "../components/CookieWarn";
import { darker } from "../types.models";
import { HomeContainer } from "../components/StyledComps";

const Home: React.FC<darker> = ({ darkMode, toggleDarkMode }) => {
  //dark mode

  //Persist Dark Mode
  useEffect(() => {
    console.log(`%c You're being Hacked....`, `background:#222; color:#FF0000`);
    setTimeout(() => {
      console.log(
        `%c...In progress accessing 10%...`,
        `background:#222; color:#FF0000`
      );
      setTimeout(() => {
        console.log(`Just kidding`);
        setTimeout(() => {
          console.log(`This website was designed and built by John Popo`);
        }, 3000);
      }, 3000);
    }, 3000);
    clearTimeout();
  }, [darkMode]);

  const themes = {
    //Props for Context dist
    toggleDarkMode,
    darkMode,
  };

  const disabledNav = "home";
  return (
    <>
      <HomeContainer {...{ darkMode }}>
        <Meta title={"JP - Full-Stack Developer Home"} />
        <ThemeContext.Provider value={themes}>
          <CookieWarn />

          <Header part={IndexHeader} disabledNav={disabledNav} />
          <Main part={IndexMain} />
          <Footer />
        </ThemeContext.Provider>
      </HomeContainer>
    </>
  );
};
export default Home;
