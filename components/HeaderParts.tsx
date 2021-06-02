import React, { useContext } from "react";
import TypeWriter from "./TypeWriter";
import { dark, ThemeContext } from "../types.models";
import { art, contact, notFound } from "../text/aboutMe";
import Link from "next/link";
import {
  AboutList,
  fadeIn,
  Head,
  ProjectAltButton,
  ProjectButton,
} from "./StyledComps";
import tw, { styled } from "twin.macro";

const smoothScrollToMain = (e: { preventDefault: () => void }) => {
  e.preventDefault();
  const element = document.getElementById("main");
  element.scrollIntoView({
    block: "start",
    behavior: "smooth", // smooth scroll
  });
};
const smoothScrollToProj = (e: { preventDefault: () => void }) => {
  e.preventDefault();
  const element = document.getElementById("projects");
  element.scrollIntoView({
    block: "start",
    behavior: "smooth", // smooth scroll
  });
};
const Words = styled.h2<dark>`
  ${tw`   italic text-sm font-light overflow-hidden h-full text-lg lg:text-xl w-full `}

  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: start;
  transform: translateZ(0);
  will-change: auto;
  animation: 1s ease-out ${fadeIn};
`;
const IndexContainer = styled.div`
  ${tw`   dark:text-whiteCream text-black `};
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: start;
`;
export const IndexHeader = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div>
      <div
        tw={
          "flex lg:flex-row flex-col dark:text-white text-black text-2xl lg:text-8xl"
        }
      >
        <IndexContainer>
          <TypeWriter />
          <Words {...{ darkMode }}>
            <p tw={"text-lg lg:my-24"}>"Head up, Keep forward."</p>
            <div
              tw={
                "flex flex-1 flex-col lg:flex-row m-14 lg:m-0 items-center self-center lg:self-auto "
              }
            >
              <Link href="/">
                <a onClick={smoothScrollToProj}>
                  <ProjectButton {...{ darkMode }}>Projects</ProjectButton>
                </a>
              </Link>
              <Link href="/">
                <a onClick={smoothScrollToMain}>
                  <ProjectAltButton {...{ darkMode }}>
                    About Me
                  </ProjectAltButton>
                </a>
              </Link>
            </div>
          </Words>
        </IndexContainer>
      </div>
    </div>
  );
};

{
  /*

  <div
              tw={
                "flex flex-1 flex-col lg:flex-row m-14 lg:m-0 items-center self-center lg:self-auto "
              }
            >
              <Link href="/">
                <a onClick={smoothScrollToProj}>
                  <ProjectButton {...{ darkMode }}>Projects</ProjectButton>
                </a>
              </Link>
              <Link href="/">
                <a onClick={smoothScrollToMain}>
                  <ProjectAltButton {...{ darkMode }}>
                    About Me
                  </ProjectAltButton>
                </a>
              </Link>
            </div>


  export const ProjectHeader = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      tw={
        "flex flex-col flex-1 items-start gap-4 overflow-hidden dark:text-whiteCream text-black"
      }
    >
      <div>
        <AboutMeHead>WHAT I'VE BEEN WORKING ON</AboutMeHead>
      </div>
      <div tw={"flex flex-col flex-1 gap-4"}>
        <p>{aboutMeProjects}</p>
        <div tw={"flex flex-col flex-1 gap-8"}>
          <h1>LATEST PROJECT:</h1>
          <div tw={"flex flex-col flex-1 gap-4"}>
            <h2>Remember To Do!</h2>
            <HeroImgProject />
          </div>
        </div>
      </div>
      <Link href="#main">
        <a tw={"flex items-center cursor-pointer"}>
          <div tw={"absolute  bottom-12 animate-bounceSlow"}>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke={darkMode ? "#fff" : "#000"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevrons-down"
              >
                <polyline points="7 13 12 18 17 13" />
                <polyline points="7 6 12 11 17 6" />
              </svg>
            </button>
          </div>
        </a>
      </Link>
    </div>
  );
};
*/
}

export const ContactHeader = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div tw={"flex flex-col flex-1 mb-72"}>
      <div
        tw={
          "flex flex-col flex-1 items-start mb-20  dark:text-whiteCream text-black"
        }
      >
        <div>
          <Head>CONTACT ME</Head>
        </div>
        <AboutList>
          <p>{contact}</p>
        </AboutList>
      </div>
      <div>
        <Link href="/">
          <a onClick={smoothScrollToMain}>
            <ProjectAltButton {...{ darkMode }}>GO TO FORM</ProjectAltButton>
          </a>
        </Link>
      </div>
    </div>
  );
};

export const ArtHeader = () => {
  return (
    <div
      tw={"flex flex-col flex-1 items-start dark:text-whiteCream text-black"}
    >
      <div tw={"my-4"}>
        <Head>ART</Head>
      </div>
      <AboutList>
        <p>{art}</p>
      </AboutList>
    </div>
  );
};

export const NotFoundHeader = () => {
  return (
    <div
      tw={
        "flex flex-col flex-1 items-start  overflow-hidden dark:text-whiteCream text-black"
      }
    >
      <div tw={"my-4"}>
        <Head>404</Head>
      </div>
      <h1 tw={"font-semibold text-center"}>
        Taking you back to my homepage...
      </h1>
      <div tw={"flex flex-col flex-1 my-4"}>
        <p>{notFound}</p>
      </div>
    </div>
  );
};
