import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Meta from "../components/Meta";
import { ArtHeader } from "../components/HeaderParts";
import { ArtMain } from "../components/MainParts";
import MainWrapperArt from "../components/MainWrapperArt";
import { ThemeContext, ThemeProps } from "../types.models";
import { ArtContainer } from "../components/StyledComps";

const Art: React.FC<ThemeProps> = ({
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

  const disabledNav = "art";
  return (
    <>
      <ArtContainer {...{ darkMode }}>
        <Meta title={"JP - Full-Stack Developer Art"} />
        <ThemeContext.Provider value={themes}>
          <Header part={ArtHeader} disabledNav={disabledNav} />
          <MainWrapperArt part={ArtMain} />
          <Footer />
        </ThemeContext.Provider>
      </ArtContainer>
    </>
  );
};

export default Art;
