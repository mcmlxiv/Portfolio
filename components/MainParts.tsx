import React, { useContext } from "react";
import Link from "next/link";
import  { styled } from "twin.macro";
import {
  portfolioHome,
  RememberTodo,
  aboutMe,
  aboutMeCont,
  aboutMeFinal,
  aboutMeFinalEnd,
  aboutMeProjects,
} from "../text/aboutMe";
import { url } from "./HeroImg";
import Image from "next/image";
import styles from "../styles/Image.module.css";
import { buildUrl } from "cloudinary-build-url";
import { dark, ThemeContext } from "../types.models";
import {
  AboutList,
  ArtWrapProj,
  BrowserBack,
  Dot,
  DotBox,
  HeroWrapProj,
} from "./StyledComps";
import Fade from "react-reveal/Fade";

const WordsMain = styled.div<dark>`
  will-change: auto;

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

const HeroImgProject = () => {
  return (
    <HeroWrapProj>
      <Link href={"https://remembertodo.vercel.app/"}>
        <a>
          <Image
            tw={"z-5 "}
            src={url}
            alt="Project"
            width="1920"
            height="1080"
            layout="responsive"
            className={styles.image}
          />
        </a>
      </Link>
      <BrowserBack>
        <DotBox>
          <Dot tw={"hover:bg-red-700"} />
          <Dot tw={"hover:bg-green-700"} />
        </DotBox>
      </BrowserBack>
    </HeroWrapProj>
  );
};
export const IndexMain = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      tw={"py-9 flex flex-col flex-1 gap-24 "}
      className={"first"}
      id={"main"}
    >
      <Fade bottom>
        <div>
          <h1
            tw={
              "text-lg flex flex-col font-semibold   mb-2 lg:mb-4 lg:text-8xl text-4xl min-h-full "
            }
          >
            About <WordsMain {...{ darkMode }}>Me.</WordsMain>
          </h1>
        </div>
      </Fade>
      <Fade bottom>
        <div tw={"flex flex-col flex-1 gap-8"}>
          <AboutList>
            <p>{aboutMe}</p>
            <br />
            <p>{aboutMeCont}</p>
          </AboutList>
          <AboutList>
            <p>{aboutMeFinal}</p>
            <br />
            <p>{aboutMeFinalEnd}</p>
          </AboutList>
        </div>
      </Fade>
      <Fade bottom>
        <div id={"projects"}>
          <h1
            tw={
              "text-lg flex flex-col font-semibold   mb-2 lg:mb-4 lg:text-8xl text-4xl min-h-full text-right"
            }
          >
            My <br />
            Projects.
          </h1>
        </div>
        <div tw={"flex flex-col flex-1 gap-8 text-right"}>
          <AboutList>
            <p tw={"text-right"}>{aboutMeProjects}</p>
            <p tw={"text-right"}>{portfolioHome}</p>
          </AboutList>
        </div>
      </Fade>
      <Fade bottom>
        <div tw={"flex flex-col flex-1 gap-8"}>
          <Link href="/remembertodo">
            <a>
              <h3 tw={"text-lg  font-semibold  mb-4 lg:text-4xl min-h-full  "}>
                Remember Todo!
              </h3>
            </a>
          </Link>
          <HeroImgProject />
          <div
            tw={
              "justify-center items-center lg:text-lg font-medium dark:text-gray-200 text-gray-500 text-justify w-80"
            }
          >
            <p>{RememberTodo}</p>
          </div>
          <Link href="/remembertodo">
            <a
              tw={
                "flex items-center cursor-pointer overflow-hidden font-medium  hover:font-semibold w-52 "
              }
            >
              <h4 tw={"text-lg min-h-full  "}>VIEW PROJECT</h4>
              <div tw={"px-4"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  display="block"
                  id="ChevronRight"
                >
                  <path d="M8 4l8 8-8 8" />
                </svg>
              </div>
            </a>
          </Link>
        </div>
      </Fade>
    </div>
  );
};

//For Later
{
  /*export const ProjectMain = () => {
  return (
    <div>
      <h1 tw={"font-semibold text-2xl mt-4"}>PROJECTS</h1>
      <div tw={"py-9 flex flex-col flex-1 gap-4 "} className={"first"}>
        <div
          tw={
            "rounded-md shadow-lg py-8  px-5 w-full dark:bg-secondaryLighter dark:bg-opacity-25  bg-white"
          }
        >
          <div>
            <div>
              <Link href="/projects/remembertodo">
                <a tw={"flex items-center cursor-pointer"}>
                  <h2> Remember To Do!</h2>
                  <div tw={"px-4"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      display="block"
                      id="ChevronRight"
                    >
                      <path d="M8 4l8 8-8 8" />
                    </svg>
                  </div>
                </a>
              </Link>

              <p tw={"py-1 leading-relaxed tracking-wider font-medium"}>
                {RememberTodo}
              </p>
              <h3 tw={"text-green-500 flex gap-1 items-center py-1 "}>
                <Dot
                  tw={"animate-ping bg-green-300 transform -translate-y-1"}
                />
                Live
              </h3>

              <div>
                <a
                  href="/projects/remembertodo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    tw={"z-50 "}
                    src={url}
                    alt="Project"
                    width="1920"
                    height="1080"
                    layout="responsive"
                    className={styles.image}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
*/
}

const publicIds = [
  "theHero",
  "thePath",
  "theOffer",
  "theHungryBrain",
  "theEndless",
  "theVictim",
  "theChoice",
  "theMirror",
  "profound",
  "theShadow",
];

export const ArtMain = () => {
  const cloudID = process.env.NEXT_PUBLIC_IMG_ID;
  return (
    <div tw={" flex flex-col flex-1 gap-24 "} className={"first"} id={"main"}>
      <div tw={"flex flex-col flex-1 gap-8"}>
        <div
          tw={"py-9 flex flex-col flex-1 gap-24 lg:px-10 "}
          className={"first"}
        >
          {publicIds.map((id) => {
            const url = buildUrl(id, {
              cloud: {
                cloudName: cloudID,
              },
            });
            return (
              <div key={id}>
                <Fade bottom>
                  <div tw={"flex items-center justify-center cursor-pointer"}>
                    <h2>{id}</h2>
                  </div>

                  <hr tw={"border-2 border-gray-300 opacity-0 w-96 "} />
                  <ArtWrapProj>
                    <Image
                      tw={"z-5"}
                      src={url}
                      alt="Project"
                      width="1920"
                      height="1080"
                      layout="responsive"
                      objectFit={"cover"}
                      className={styles.image}
                    />
                  </ArtWrapProj>
                </Fade>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const NotFoundMain = () => {
  return <div />;
};