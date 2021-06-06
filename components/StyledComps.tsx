import { keyframes } from "styled-components";
import { dark } from "../types.models";

import tw, { styled } from "twin.macro";

export const fadeIn = keyframes`
  from{

    
    opacity:0;
    transform: translateY(30px);
  }
  to{
    opacity: 1;
    transform: translateY(0); 

  }
`;

export const AboutList = styled.div`
  ${tw`  flex flex-1 flex-col lg:flex-row justify-center text-justify items-center lg:text-lg font-medium dark:text-gray-200 text-gray-500 text-justify my-4 sm:my-8`};

  width: 100%;
  @media only screen and (min-width: 960px) {
    width: 80%;
  }
`;

export const ProjectButton = styled.button<dark>`
  ${tw`  lg:px-10 lg:py-4 text-sm px-20  py-2 lg:text-lg font-semibold tracking-wider  lg:mr-4 lg:mb-0 mb-6 rounded-lg transition duration-300 ease-in-out shadow-sm max-w-full`}
  background:linear-gradient(#51a9ee, #147bcd);

  color: white;
  &:hover {
    background: linear-gradient(#51a9ee, #51a9ee);
  }
`;

{
  /*export const ProjectButton = styled.button<dark>`
  ${tw`  lg:px-10 lg:py-4 text-sm px-20  py-2 lg:text-lg font-semibold tracking-wider  lg:mr-4 lg:mb-0 mb-6 rounded-lg transition duration-300 ease-in-out shadow-lg max-w-full`}

  ${(p) =>
    p.darkMode
      ? `  border: 1px solid white ;
  background-color: white;
  color:black;
  &:hover{
    border: 1px solid white;
    background-color: black;
    color:white;
  }`
      : `  border: 1px solid white ;
  background-color: black;
  color:white;
  &:hover{
    border: 1px solid black ;
    background-color: white;
    color:black;
  }`};
`;

 ${(p) =>
    p.darkMode
      ? `  border: 1px solid rgba(179, 178, 177, 0.8) ;
  background-color: black;
  color:white;
  &:hover{
    border: 1px solid white ;

  }`
      : `border: 1px solid rgba(179, 178, 177, 0.8) ;
  background-color: white;
  color:black;
  &:hover{
    border: 1px solid black;

  }`};*/
}

export const bg = keyframes`0% {
                       background-position: 5% 5%;
                     }
                       25% {
                         background-position: 5% 95%;
                         background-size: 250%;
                       }
                       50% {
                         background-position: 95% 95%;
                         background-size: 150%;
                       }
                       75% {
                         background-position: 5% 95%;
                       }
                       100% {
                         background-position: 5% 5%;
                       }`;
export const ProjectAltButton = styled.button<dark>`
  ${tw`  lg:px-10 lg:py-4 text-sm px-20 py-2 lg:text-lg font-semibold tracking-wider rounded-lg transition duration-300 ease-in-out shadow-sm border-2 dark:border-gray-700 border-white hover:border-blue-400 `}
  width: max-content;
  will-change: auto;
  background-repeat: no-repeat;
  background-image: none;
  background-size: 200%;
  background-clip: border-box;
  -webkit-background-clip: text;
  color: ${(p) => (p.darkMode ? `white` : `black`)};
  @media only screen and (min-width: 960px) {
    background-image: url("https://products.ls.graphics/mesh-gradients/images/14.-Prim_1.jpg");
    color: transparent;
    animation: ${bg} 8s cubic-bezier(0.77, 0, 0.175, 1) 2s infinite;
  }
`;

export const ArtWrapProj = styled.div`
  height: 100%;
  width: 100%;
`;

export const Head = styled.title`
  ${tw`   text-lg flex flex-col font-semibold  mb-4 lg:text-6xl min-h-full  `}

  animation: 1s ease-out ${fadeIn};
`;

export const ContactContainer = styled.div<dark>`
  ${tw` font-semibold`}

  background-color: ${(p) => (p.darkMode ? `black` : `white`)};
  overflow: hidden;
  font-size: clamp(0.5rem, 0.8rem, 1.5rem);
  display: grid;
  min-height: 100vh;
  grid-template-rows: minmax(min-content, 20vh) minmax(min-content, 75vh) minmax(
      min-content,
      50vh
    );
  grid-template-columns:
    [full-start]minmax(min-content, 1fr) [center-start] repeat(
      2,
      [col-start] minmax(min-content, 48rem) [col-end]
    )
    [center-end] minmax(min-content, 1fr) [full-end];
  font-family: "Montserrat", serif;
  letter-spacing: 0.025rem;
  @media only screen and (min-width: 960px) {
    grid-template-rows: minmax(min-content, 20vh) minmax(min-content, 75vh) minmax(
        min-content,
        60vh
      );
  }
`;

export const HomeContainer = styled.div<dark>`
  ${tw` font-semibold`}

  background-color: ${(p) => (p.darkMode ? `black` : `white`)};
  overflow: hidden;
  font-size: clamp(0.5rem, 0.8rem, 1.5rem);
  display: grid;
  min-height: 100vh;
  grid-template-rows:
    minmax(min-content, 10vh) minmax(min-content, 40vh) minmax(
      min-content,
      75vh
    )
    minmax(min-content, 50vh);
  grid-template-columns:
    [full-start]minmax(min-content, 1fr) [center-start] repeat(
      2,
      [col-start] minmax(min-content, 48rem) [col-end]
    )
    [center-end] minmax(min-content, 1fr) [full-end];
  font-family: "Montserrat", serif;
  letter-spacing: 0.025rem;
  @media only screen and (min-width: 960px) {
    grid-template-rows:
      min-content minmax(min-content, 20vh) minmax(min-content, 75vh)
      minmax(min-content, 60vh);
  }
`;

export const ArtContainer = styled.div<dark>`
  ${tw` font-semibold`}

  background-color: ${(p) => (p.darkMode ? `black` : `white`)};
  overflow: hidden;
  font-size: clamp(0.5rem, 0.8rem, 1.5rem);
  display: grid;
  min-height: 100vh;
  grid-template-rows: minmax(min-content, 20vh) minmax(min-content, 75vh) minmax(
      min-content,
      50vh
    );
  grid-template-columns:
    [full-start]minmax(min-content, 1fr) [center-start] repeat(
      2,
      [col-start] minmax(min-content, 48rem) [col-end]
    )
    [center-end] minmax(min-content, 1fr) [full-end];
  font-family: "Montserrat", serif;
  letter-spacing: 0.025rem;
  @media only screen and (min-width: 960px) {
    grid-template-rows: minmax(min-content, 20vh) minmax(min-content, 75vh) minmax(
        min-content,
        60vh
      );
  }
`;

export const RememberContainer = styled.div<dark>`
  ${tw` font-semibold`}

  background-color: ${(p) => (p.darkMode ? `black` : `white`)};
  overflow: hidden;
  font-size: clamp(0.5rem, 0.8rem, 1.5rem);
  display: grid;
  min-height: 100vh;
  grid-template-rows: minmax(min-content, 100vh) minmax(min-content, 75vh) minmax(
      min-content,
      50vh
    );
  grid-template-columns:
    [full-start]minmax(1.5rem, 1fr) [center-start] repeat(
      2,
      [col-start] minmax(min-content, 14rem) [col-end]
    )
    [center-end] minmax(1.5rem, 1fr) [full-end];
  font-family: "Montserrat", serif;
  letter-spacing: 0.025rem;
  @media only screen and (min-width: 960px) {
    grid-template-columns:
      [full-start]minmax(20rem, 1fr) [center-start] repeat(
        2,
        [col-start]minmax(min-content, 48rem) [col-end]
      )
      [center-end] minmax(20rem, 1fr) [full-end];
    grid-template-rows: minmax(min-content, 100vh) minmax(min-content, 75vh) minmax(
        min-content,
        60vh
      );
  }
`;

export const RememberAboutList = styled.div`
  ${tw`  flex flex-1 flex-col lg:flex-row gap-6 justify-center items-center lg:text-lg font-medium dark:text-gray-200 text-gray-500 text-justify `};

  width: 100%;
  @media only screen and (min-width: 960px) {
    width: 60rem;
  }
`;

export const FullMovingLine = styled.hr<dark>`
  ${tw`  border-2 rounded   `}
  width:0;
  opacity: 0;
  transition: all 0.2s ease-out;
  border-color: ${(p) => (p.darkMode ? `white` : `black`)};
`;

export const SolidLine = styled.hr<dark>`
  ${tw`  border-2 rounded `}
  width:100%;
  opacity: 1;

  border-color: ${(p) => (p.darkMode ? `white` : `black`)};
`;

export const FullList = styled.div`
  ${tw`  flex justify-center items-center flex-1 overflow-hidden gap-8 leading-relaxed tracking-wider list-none `};

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const MovingLine = styled.hr<dark>`
  ${tw`  border-2 rounded   `}
  width:0;
  opacity: 0;
  transition: all 0.2s ease-out;
  border-color: ${(p) => (p.darkMode ? `white` : `black`)};
`;
export const ListEle = styled.div`
  &:hover ${MovingLine} {
    width: 100%;
    opacity: 1;
  }
`;

export const HeroWrapProj = styled.div`
  ${tw` relative rounded my-8 `};

  width: 100%;
  height: 100%;
`;

export const HeroWrapMock = styled.div`
  ${tw` relative rounded `}
  filter: drop-shadow(4px 2px 10px #a3a3a2);
`;

export const HeroWrap = styled.div`
  ${tw` relative transform translate-x-44 rounded`}
  animation: 1s ease-out ${fadeIn};
  transform: translateY(10rem) translateZ(0);
  width: 130%;
  height: 100%;
  object-fit: fill;
`;
export const BrowserBack = styled.div`
  ${tw` absolute top-0  object-cover rounded `}

  height: 100%;
  width: 100%;
  transform: translateY(-14px) translateZ(0);
  background-color: #5a5a5f;
`;

export const BrowserWait = styled.div`
  ${tw`  opacity-0 z-50 `}

  height:32rem;
  width: 24rem;
  transform: translateZ(0);
`;

export const Dot = styled.span`
  margin-top: 3px;
  margin-left: 4px;
  padding: 4px;
  height: 4px;
  width: 4px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transform: translateZ(0);
`;

export const DotBox = styled.span`
  ${tw`   absolute top-0 left-0 flex gap-1 items-center `}
  transform:  translateZ(0);
`;

export const NotFoundContainer = styled.div<dark>`
  ${tw` font-semibold`}

  background-color: ${(p) => (p.darkMode ? `black` : `white`)};
  overflow: hidden;
  font-size: clamp(0.5rem, 0.8rem, 1.5rem);
  display: grid;
  min-height: 100vh;
  grid-template-rows: minmax(min-content, 20vh) minmax(min-content, 75vh) minmax(
      min-content,
      50vh
    );
  grid-template-columns:
    [full-start]minmax(min-content, 1fr) [center-start] repeat(
      2,
      [col-start] minmax(min-content, 48rem) [col-end]
    )
    [center-end] minmax(min-content, 1fr) [full-end];
  font-family: "Montserrat", serif;
  letter-spacing: 0.025rem;
  @media only screen and (min-width: 960px) {
    grid-template-rows: minmax(min-content, 20vh) minmax(min-content, 75vh) minmax(
        min-content,
        60vh
      );
  }
`;
