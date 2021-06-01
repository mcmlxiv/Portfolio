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
  ${tw`  flex flex-1 flex-col lg:flex-row gap-6 justify-center items-center lg:text-lg font-medium dark:text-gray-200 text-gray-500 text-justify `};

  width: 100%;
  @media only screen and (min-width: 960px) {
    width: 60rem;
  }
`;

export const ProjectButton = styled.button<dark>`
  ${tw`  lg:px-10 lg:py-4 text-sm px-6 py-2 lg:text-lg font-semibold tracking-wider  rounded-lg transition duration-300 ease-in-out shadow-lg `}

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
export const ProjectAltButton = styled.button<dark>`
  ${tw`  lg:px-10 lg:py-4 text-sm px-6 py-2 lg:text-lg font-semibold tracking-wider  rounded-lg transition duration-300 ease-in-out  shadow-lg`}

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

  }`};
`;

export const ArtWrapProj = styled.div`
  height: 100%;
  width: 100%;

  @media only screen and (min-width: 376px) {
    ${tw`  px-10`}
  }
  @media only screen and (min-width: 960px) {
    height: 50rem;
    width: 60rem;
  }
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

export const FooterWrapper = styled.div<dark>`
  ${tw`flex-1 flex flex-col justify-center items-center dark:text-whiteCream text-black  xl:px-72 border-t-2 py-16 `}
  grid-column:full-start/full-end;

  background-color: ${(p) =>
    p.darkMode
      ? `
rgba(44, 44, 44, 0.5)
`
      : `
      rgba(227, 227, 227, 0.5)
`};
  border-color: ${(p) =>
    p.darkMode
      ? `
rgba(44, 44, 44, 0.5)
`
      : `
      rgba(237, 237, 237, 0.5)
`}; ;
`;
export const FooterContainer = styled.div`
  ${tw`flex flex-col px-9 h-3/4 text-xs font-medium gap-8 `}
  height:100%;
  width: 100%;
  margin: 0 auto;
`;
export const FooterBase = styled.div`
  ${tw`flex flex-col  w-full list-none  `}
`;
export const FooterMain = styled.div`
  ${tw`grid grid-flow-col grid-cols-2  w-full h-full `}
  font-size: clamp(0.3rem, 0.8rem, 1.5rem);
`;

export const FooterCopy = styled.div`
  ${tw`flex justify-between items-center flex-row py-2`};

  font-size: clamp(0.3rem, 0.65rem, 1.5rem);
`;
export const MovingLine = styled.hr<dark>`
  ${tw`  border-2 rounded   `}
  width:0;
  opacity: 0;
  transition: all 0.2s ease-out;
  border-color: ${(p) => (p.darkMode ? `white` : `black`)};
`;
export const FooterListEle = styled.li`
  &:hover ${MovingLine} {
    width: 100%;
    opacity: 1;
  }
`;

export const FooterSkills = styled.div`
  display: none;
  @media only screen and (min-width: 768px) {
    display: flex;
    flex: 1;
    justify-content: space-between;
    height: 100%;

    gap: 1rem;
    max-height: 10rem;
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
export const ListEle = styled.div`
  &:hover ${MovingLine} {
    width: 100%;
    opacity: 1;
  }
`;

export const HeroWrapProj = styled.div`
  ${tw` relative rounded `};

  @media only screen and (min-width: 960px) {
    width: 40%;
    height: 40%;
  }
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

  height:10rem;
  width: 20rem;
  transform: translateY(-14px) translateZ(0);
  background-color: #5a5a5f;
  @media only screen and (min-width: 376px) {
    opacity: 0;
  }
  @media only screen and (min-width: 960px) {
    height: 13rem;
    width: 24rem;
    opacity: 1;
  }
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