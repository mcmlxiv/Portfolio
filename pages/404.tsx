import React from "react";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ThemeContext, ThemeProps } from "../types.models";
import Meta from "../components/Meta";
import { NotFoundHeader } from "../components/HeaderParts";
import { NotFoundMain } from "../components/MainParts";
import { NotFoundContainer } from "../components/StyledComps";
import CookieWarn from "../components/CookieWarn";

const NotFound: React.FC<ThemeProps> = ({
  darkMode,
  toggleDarkMode,
  toggleSetOpen,
  open,
}) => {
  const themes = {
    //Props for Context dist
    toggleDarkMode,
    darkMode,
    toggleSetOpen,
    open,
  };

  const disabledNav = "contact";
  return (
    <>
      <NotFoundContainer {...{ darkMode }}>
        <Meta title={"JP - Full-Stack Developer 404 Page Not Found"} />
        <ThemeContext.Provider value={themes}>
          <CookieWarn />
          <Header part={NotFoundHeader} disabledNav={disabledNav} />
          <Main part={NotFoundMain} />
          <Footer />
        </ThemeContext.Provider>
      </NotFoundContainer>
    </>
  );
};

export default NotFound;
