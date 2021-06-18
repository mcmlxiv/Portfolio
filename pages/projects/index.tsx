import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Meta from "../../components/Meta";
import { ProjectHeader } from "../../components/HeaderParts";
import { ProjectMain } from "../../components/MainParts";
import { ThemeContext, ThemeProps } from "../../types.models";
import { ContactContainer } from "../../components/StyledComps";
import Main from "../../components/Main";
import CookieWarn from "../../components/CookieWarn";

const Projects: React.FC<ThemeProps> = ({
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

  const disabledNav = "project";
  return (
    <>
      <ContactContainer {...{ darkMode }}>
        <Meta title={"JP - Full-Stack Developer Art"} />
        <ThemeContext.Provider value={themes}>
          <CookieWarn />
          <Header part={ProjectHeader} disabledNav={disabledNav} />
          <Main part={ProjectMain} />
          <Footer />
        </ThemeContext.Provider>
      </ContactContainer>
    </>
  );
};

export default Projects;
