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
  ${tw`   italic text-sm font-light overflow-hidden h-full text-lg lg:text-xl  `}

  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: start;
  gap: 8rem;
  transform: translateZ(0);
  will-change: auto;
  animation: 1s ease-out ${fadeIn};
  ${(p) =>
    p.darkMode
      ? `background-repeat: no-repeat;
  background-image: url("https://products.ls.graphics/mesh-gradients/images/14.-Prim_1.jpg");
  background-size: 200%;
  background-clip: border-box;
  -webkit-background-clip: text;
  color: transparent;
  animation: bg 8s cubic-bezier(0.77, 0, 0.175, 1) 2s infinite;
  );`
      : `
  );`};
`;
const IndexContainer = styled.div`
  ${tw`   dark:text-whiteCream text-black `};
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: start;
  gap: 15rem;
  @media only screen and (min-width: 960px) {
    gap: 20rem;
  }
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
            "Head up, Keep forward."
            <div tw={"flex flex-1 gap-4 items-center"}>
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
  /*export const ProjectHeader = () => {
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
    <div tw={"flex flex-col flex-1 gap-80"}>
      <div
        tw={
          "flex flex-col flex-1 items-start gap-4  dark:text-whiteCream text-black"
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
      tw={
        "flex flex-col flex-1 items-start gap-4  dark:text-whiteCream text-black"
      }
    >
      <div>
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
        "flex flex-col flex-1 items-start gap-4 overflow-hidden dark:text-whiteCream text-black"
      }
    >
      <div>
        <Head>404</Head>
      </div>
      <h1 tw={"font-semibold text-center"}>
        Taking you back to my homepage...
      </h1>
      <div tw={"flex flex-col flex-1 gap-4"}>
        <p>{notFound}</p>
      </div>
    </div>
  );
};
