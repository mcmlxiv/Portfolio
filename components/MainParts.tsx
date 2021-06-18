import React, { useContext } from "react";
import Link from "next/link";
import tw, { styled } from "twin.macro";
import {
  portfolioHome,
  RememberTodo,
  aboutMe,
  aboutMeCont,
  aboutMeFinal,
  aboutMeFinalEnd,
  aboutMeProjects,
  Starbucks,
  Blog,
} from "../text/aboutMe";
import { url, urlBlogFront, urlStoreFront } from "./HeroImg";
import Image from "next/image";
import styles from "../styles/Image.module.css";
import { buildUrl } from "cloudinary-build-url";
import { dark, ThemeContext } from "../types.models";
import { AboutList, ArtWrapProj, bg, Dot } from "./StyledComps";
import Fade from "react-reveal/Fade";

const WordsMain = styled.div<dark>`
  ${tw` pb-2`}

  will-change: auto;

  background-repeat: no-repeat;
  background-image: url("https://products.ls.graphics/mesh-gradients/images/14.-Prim_1.jpg");
  background-size: 200%;
  background-clip: border-box;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${bg} 8s cubic-bezier(0.77, 0, 0.175, 1) 2s infinite;
`;

export const IndexMain = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div tw={"py-9 flex flex-col flex-1 "} className={"first"}>
      <Fade bottom>
        <div tw={" mb-8 lg:mb-24"} id={"main"}>
          <h1
            tw={
              "flex flex-col font-semibold   mb-2 lg:mb-4 lg:text-8xl text-6xl min-h-full "
            }
          >
            About <WordsMain {...{ darkMode }}>Me.</WordsMain>
          </h1>
        </div>
      </Fade>
      <Fade bottom>
        <div tw={"flex flex-col flex-1"}>
          <AboutList>
            <p tw={"mb-4 lg:mb-0 lg:mr-10"}>{aboutMe}</p>
            <br />
            <p>{aboutMeCont}</p>
          </AboutList>
          <AboutList>
            <p tw={"mb-4 lg:mb-0 lg:mr-10 "}>{aboutMeFinal}</p>
            <br />
            <p>{aboutMeFinalEnd}</p>
          </AboutList>
        </div>
      </Fade>
      <Fade bottom>
        <div id={"projects"} tw={"my-12 lg:my-16"}>
          <h1
            tw={
              " flex flex-col font-semibold  lg:text-8xl text-6xl  min-h-full text-right lger:mr-56"
            }
            css={`
              @media only screen and (min-width: 960px) {
                margin-right: 19.4%;
              }
            `}
          >
            <WordsMain {...{ darkMode }}>My</WordsMain>
            Projects.
          </h1>
        </div>
        <div tw={"flex flex-col flex-1 text-justify"}>
          <AboutList>
            <p tw={"text-right mb-4 lg:mb-0 lg:mr-10"}>{aboutMeProjects}</p>
            <p tw={"text-right mb-4 lg:mb-0"}>{portfolioHome}</p>
          </AboutList>
        </div>
      </Fade>
      <Fade bottom>
        <div tw={"flex flex-col flex-1 my-4 lg:my-10"}>
          <ProjectMain />
        </div>
      </Fade>
    </div>
  );
};

export const ProjectMain = () => {
  return (
    <div>
      <h1 tw={"font-semibold text-2xl mt-4"}>PROJECTS</h1>
      <div tw={"py-9 flex flex-col flex-1 space-y-6  "} className={"first"}>
        <div
          tw={
            "flex flex-1 flex-col lger:flex-row space-y-6 lger:space-y-0 lger:space-x-6"
          }
        >
          <div
            className="group"
            tw={
              "rounded-md shadow-lg py-8  px-5 w-80 sm:w-96 dark:bg-gray-200 dark:bg-opacity-25  bg-white transition duration-300 transform hover:scale-105 dark:hover:bg-opacity-40 "
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
                  <a href="/projects/remembertodo">
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

          <div
            className="group"
            tw={
              "rounded-md shadow-lg py-8  px-5 w-80 sm:w-96 dark:bg-gray-200 dark:bg-opacity-25  bg-white  transition duration-300 transform hover:scale-105 dark:hover:bg-opacity-40 "
            }
          >
            <div>
              <div>
                <Link href="/projects/ecommerce">
                  <a tw={"flex items-center cursor-pointer"}>
                    <h2> Starbucks Ecommerce Clone</h2>
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
                  {Starbucks}
                </p>
                <h3 tw={"text-green-500 flex gap-1 items-center py-1 "}>
                  <Dot
                    tw={"animate-ping bg-green-300 transform -translate-y-1"}
                  />
                  Live
                </h3>

                <div>
                  <a href="/projects/ecommerce">
                    <Image
                      tw={"z-50 "}
                      src={urlStoreFront}
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
        <div
          tw={
            "flex flex-1 flex-col lger:flex-row space-y-4 lger:space-y-0 lger:space-x-4"
          }
        >
          <div
            className="group"
            tw={
              "rounded-md shadow-lg py-8  px-5 w-80 sm:w-96 dark:bg-gray-200 dark:bg-opacity-25  bg-white transition duration-300 transform hover:scale-105 dark:hover:bg-opacity-40  "
            }
          >
            <div>
              <div>
                <Link href="/projects/blog">
                  <a tw={"flex items-center cursor-pointer"}>
                    <h2> NextJS GhostCMS Blog</h2>
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
                  {Blog}
                </p>
                <h3 tw={"text-green-500 flex gap-1 items-center py-1 "}>
                  <Dot
                    tw={"animate-ping bg-green-300 transform -translate-y-1"}
                  />
                  Live
                </h3>

                <div>
                  <a href="/projects/blog">
                    <Image
                      tw={"z-50 "}
                      src={urlBlogFront}
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
    </div>
  );
};

{
  /* <div>
          <div
            tw={
              "rounded-md shadow-lg py-8  px-5 w-96 dark:bg-secondaryLighter dark:bg-opacity-25  bg-white"
            }
          >
            <div>
              <div>
                <Link href="/projects/remembertodo">
                  <a tw={"flex items-center cursor-pointer"}>
                    <h2> NextJS GhostCMS Blog</h2>
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
                  {Blog}
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
                      src={urlBlogFront}
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
        </div>*/
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
  return (
    <div tw={" flex flex-col flex-1 my-24 "} className={"first"} id={"main"}>
      <div tw={"flex flex-col flex-1 my-8"}>
        <div tw={"py-9 flex flex-col flex-1  lg:px-10 "} className={"first"}>
          {publicIds.map((id) => {
            const url = buildUrl(id, {
              cloud: {
                cloudName: "mcmlxiv",
              },
            });
            return (
              <div key={id} tw={"my-24 relative"}>
                <Fade bottom>
                  <div tw={"flex items-center justify-center cursor-pointer"}>
                    <h2>{id}</h2>
                  </div>
                  <ArtWrapProj>
                    <Image
                      tw={"z-5"}
                      src={url}
                      alt={url}
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
