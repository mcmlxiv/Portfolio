import React from "react";
import tw, { styled } from "twin.macro";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ThemeContext } from "../types.models";

import Meta from "../components/Meta";
import Fade from "react-reveal/Fade";

import {
  RememberTodoLessons,
  RememberTodoLessonsCont,
  RememberTodoProblems,
  RememberTodoProblemsCont,
  RememberTodoProject,
  RememberTodoProjectCont,
  RememberTodoPurpose,
  RememberTodoPurposeCont,
  RememberTodoStack,
  RememberTodoStackCont,
} from "../text/aboutMe";
import { HeroImgMockUp, url } from "../components/HeroImg";
import { Dot } from "../components/StyledComps";

import { keyframes } from "styled-components";

import { DiMongodb, DiReact, DiNodejs } from "react-icons/di";
import {
  SiGraphql,
  SiApollographql,
  SiMaterialUi,
  SiHeroku,
} from "react-icons/si";
import { RememberContainer } from "../components/StyledComps";
import { darker } from "../types.models";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Image.module.css";

const fadeIn = keyframes`
  from{

    
    opacity:0;
    transform: translateY(30px);
  }
  to{
    opacity: 1;
    transform: translateY(0);

  }
`;

const HeaderR = styled.h1`
  ${tw`   text-lg flex flex-col font-semibold  mb-4 lg:text-6xl min-h-full  `}

  animation: 1s ease-out ${fadeIn};
`;
const AboutList = styled.div`
  ${tw`  flex flex-1 flex-col lg:flex-row gap-6 justify-center items-center lg:text-lg font-medium dark:text-gray-200 text-gray-500 text-justify `};

  width: 100%;
  @media only screen and (min-width: 960px) {
    width: 60rem;
  }
`;
const HeroWrapRemember = styled.div`
  ${tw` relative rounded py-12 `};
  filter: drop-shadow(4px 2px 10px #a3a3a2);
  width: 90%;
  height: 90%;
  padding-left: 1rem;
  min-width: 90%;
  min-height: 90%;

  @media only screen and (min-width: 960px) {
    width: 80%;
    height: 80%;
    padding-left: 0;
  }
`;

const HeroImgRemember = () => {
  return (
    <HeroWrapRemember>
      <Link href={"https://remembertodo.vercel.app/"}>
        <a tw={" shadow-2xl"}>
          <Image
            tw={"z-5 "}
            src={url}
            alt="RememberTodo"
            width="1920"
            height="1080"
            layout="responsive"
            className={styles.image}
          />
        </a>
      </Link>
    </HeroWrapRemember>
  );
};

const RememberTodo: React.FC<darker> = ({ darkMode, toggleDarkMode }) => {
  const themes = {
    //Props for Context dist
    toggleDarkMode,
    darkMode,
  };

  const RememberHeader = () => {
    return (
      <div
        tw={"flex flex-col flex-1 items-start  dark:text-whiteCream text-black"}
      >
        <div tw={"mb-4"}>
          <HeaderR>
            Remember
            <br />
            ToDo!
          </HeaderR>
        </div>
        <Fade bottom>
          <AboutList>
            <p tw={"mb-4"}>{RememberTodoProject}</p>
            <p>{RememberTodoProjectCont}</p>
          </AboutList>
        </Fade>
        <Fade bottom>
          <div tw={"flex flex-1 justify-between h-full py-16 w-full lg:w-1/4"}>
            <div>
              <h3 tw={"lg:text-xl "}>Type</h3>
              <div tw={"dark:text-gray-200 text-gray-500"}>
                <h5>Personal</h5>
              </div>
            </div>
            <div tw={"mx-6"}>
              <h3 tw={"lg:text-xl"}>Stack</h3>
              <div tw={"dark:text-gray-200 text-gray-500 leading-loose"}>
                <h5>TypeScript</h5>
                <h5>React</h5>
                <h5>GraphQL/Apollo</h5>
                <h5>MaterialUI</h5>
                <h5>MongoDB/Mongoose</h5>
                <h5>Express</h5>
                <h5>Heroku</h5>
                <h5>Vercel</h5>
              </div>
            </div>
            <div>
              <h3
                tw={
                  "text-green-500 flex gap-1 items-center py-1 lg:text-xl -translate-x-2 lg:translate-x-0 "
                }
              >
                Live
                <Dot
                  tw={"animate-ping bg-green-300 transform -translate-y-1"}
                />
              </h3>
              <div tw={"dark:text-gray-200 text-gray-500"}>
                <div tw={"font-semibold mt-4 cursor-pointer"}>
                  <a href="https://remembertodo.vercel.app/">
                    <h5>Go to App!</h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <HeroImgRemember />
      </div>
    );
  };

  const RememberMain = () => {
    return (
      <div
        tw={"py-9 flex flex-col flex-1 lg:gap-24 gap-12 "}
        className={"first"}
      >
        <Fade bottom>
          <div>
            <h1
              tw={
                "text-lg flex flex-col font-semibold  mb-8 lg:text-5xl min-h-full "
              }
            >
              Project Purpose and Goal.
            </h1>
          </div>
        </Fade>
        <Fade bottom>
          <div tw={"flex flex-col flex-1 "}>
            <AboutList>
              <p tw={"mb-4"}>{RememberTodoPurpose}</p>
              <p>{RememberTodoPurposeCont}</p>
            </AboutList>
          </div>
        </Fade>
        <Fade bottom>
          <div>
            <h1
              tw={
                "text-lg flex flex-col font-semibold  my-8 lg:text-5xl min-h-full "
              }
            >
              Stack and Explanation
            </h1>
          </div>
        </Fade>
        <Fade bottom>
          <div tw={"flex flex-col flex-1 gap-8"}>
            <div tw={"flex flex-1 justify-between text-2xl lg:text-6xl my-4"}>
              <DiMongodb />
              <DiReact />
              <DiNodejs />
              <SiGraphql />
              <SiApollographql />
              <SiHeroku />
              <SiMaterialUi />
            </div>
            <AboutList>
              <p tw={"my-4"}>{RememberTodoStack}</p>
            </AboutList>
            <AboutList>
              <p>{RememberTodoStackCont}</p>
            </AboutList>
          </div>
        </Fade>
        <Fade bottom>
          <HeroImgMockUp />
        </Fade>
        <Fade bottom>
          <div>
            <h1
              tw={
                "text-lg flex flex-col font-semibold  my-8 lg:text-5xl min-h-full "
              }
            >
              Problems and Though Process
            </h1>
          </div>
          <div tw={"flex flex-col flex-1 "}>
            <AboutList>
              <p tw={"my-4"}>{RememberTodoProblems}</p>
            </AboutList>
            <AboutList>
              <p>{RememberTodoProblemsCont}</p>
            </AboutList>
          </div>
        </Fade>
        <Fade bottom>
          <div>
            <h1
              tw={
                "text-lg flex flex-col font-semibold  my-8 lg:text-5xl min-h-full "
              }
            >
              Lessons Learned
            </h1>
          </div>
          <div tw={"flex flex-col flex-1 gap-8"}>
            <AboutList>
              <p tw={"my-4"}>{RememberTodoLessons}</p>
              <p>{RememberTodoLessonsCont}</p>
            </AboutList>
          </div>
        </Fade>
      </div>
    );
  };
  const disabledNav = "project";
  return (
    <>
      <RememberContainer {...{ darkMode }}>
        <Meta title={"JP - Full-Stack Developer RememberToDo"} />
        <ThemeContext.Provider value={themes}>
          <Header part={RememberHeader} disabledNav={disabledNav} />
          <Main part={RememberMain} />
          <Footer />
        </ThemeContext.Provider>
      </RememberContainer>
    </>
  );
};

export default RememberTodo;
