import React, { useContext } from "react";
import { dark, ThemeContext } from "../types.models";
import Link from "next/link";
import Accordion from "./Accordion";
import tw, { styled } from "twin.macro";

const FooterWrapper = styled.div<dark>`
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
const FooterContainer = styled.div`
  ${tw`flex flex-col px-9 h-3/4 text-xs font-medium gap-8 `}
  height:100%;
  width: 100%;
  margin: 0 auto;
`;
const FooterBase = styled.div`
  ${tw`flex flex-col  w-full list-none  `}
`;
// const FooterMain = styled.div`
//   ${tw`grid grid-flow-col grid-cols-2  w-full h-full `}
//   font-size: clamp(0.3rem, 0.8rem, 1.5rem);
// `;

const FooterCopy = styled.div`
  ${tw`flex justify-between items-center flex-row py-2`};

  font-size: clamp(0.3rem, 0.65rem, 1.5rem);
`;
const MovingLine = styled.hr<dark>`
  ${tw`  border-2 rounded   `}
  width:0;
  opacity: 0;
  transition: all 0.2s ease-out;
  border-color: ${(p) => (p.darkMode ? `white` : `black`)};
`;
const FooterListEle = styled.li`
  &:hover ${MovingLine} {
    width: 100%;
    opacity: 1;
  }
`;

const FooterSkills = styled.div`
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

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <FooterWrapper {...{ darkMode }}>
      <FooterContainer>
        <div tw={"flex flex-col flex-1 h-full md:max-h-10 "}>
          <h2 tw={" text-2xl font-semibold pb-4"}>
            Let's Build Something Together
          </h2>
          <p tw={" font-medium dark:text-gray-200 text-gray-500"}>
            Feel free to reach out if you're looking for a developer, have a
            question or want to connect!
          </p>
        </div>
        <div>
          <h2 tw={"  text-lg font-semibold py-4"}>Skills</h2>
        </div>
        <Accordion />
        <FooterSkills>
          <div>
            <h3>Language</h3>
            <div tw={"dark:text-gray-200 text-gray-500"}>
              <h5>TypeScript</h5>
              <h5>JavaScript</h5>
              <h5>HTML</h5>
              <h5>CSS3</h5>
              <h5>SASS</h5>
              <h5>MatLab</h5>
            </div>
          </div>
          <div>
            <h3>Frameworks</h3>
            <div tw={"dark:text-gray-200 text-gray-500"}>
              <h5>React</h5>
              <h5>NextJs</h5>
              <h5>GatsbyJs</h5>
              <h5>NodeJs</h5>
              <h5>Material Ui</h5>
              <h5>Styled-Components</h5>
              <h5>Tailwind</h5>
              <h5>Twin Macro</h5>
            </div>
          </div>
          <div>
            <h3>Database & Query</h3>
            <div tw={"dark:text-gray-200 text-gray-500"}>
              <h5>MongoDB</h5>
              <h5>GraphQL</h5>
              <h5>Rest</h5>
            </div>
          </div>
          <div>
            <h3>Services</h3>
            <div tw={"dark:text-gray-200 text-gray-500"}>
              <h5>Netlify</h5>
              <h5>Vercel</h5>
              <h5>Heroku</h5>
              <h5>Adobe XD</h5>
              <h5>Adobe Photoshop</h5>
              <h5>Mlab</h5>
            </div>
          </div>
        </FooterSkills>
        <div tw={"flex flex-1 flex-col w-40 md:max-h-10"}>
          <div tw={"cursor-pointer my-2  hover:font-semibold"}>
            <Link href="tel:+866 0909 316 039 ">
              <a>+866 0909 316 039</a>
            </Link>
          </div>
          <div tw={"cursor-pointer mb-2  hover:font-semibold"}>
            <Link href="mailto:enpower56@gmail.com">
              <a>enpower56@gmail.com</a>
            </Link>
          </div>
        </div>
        <FooterBase>
          <div tw={"flex flex-1 gap-2  dark:text-gray-200 text-gray-500 "}>
            <FooterListEle>
              <Link href="https://github.com/mcmlxiv">
                <a
                  tw={
                    "pr-1 cursor-pointer hover:font-semibold hover:text-black"
                  }
                >
                  github
                </a>
              </Link>
            </FooterListEle>
            <FooterListEle>
              <Link href="https://www.instagram.com/mjjp13/">
                <a
                  tw={
                    "px-1 cursor-pointer hover:font-semibold hover:text-red-600"
                  }
                >
                  instagram
                </a>
              </Link>
            </FooterListEle>
            <FooterListEle>
              <Link href="https://www.linkedin.com/in/majid-popo-400291213">
                <a
                  tw={
                    "px-1 cursor-pointer hover:font-semibold hover:text-blue-600"
                  }
                >
                  linkedIn
                </a>
              </Link>
            </FooterListEle>
          </div>
          <FooterCopy>
            <p tw={"flex flex-col  dark:text-gray-200 text-gray-500"}>
              <span>
                Copyright © 2021
                <Link href="/">
                  <a tw={"px-1 cursor-pointer"}>John Popo.</a>
                </Link>
                All rights reserved.
              </span>
            </p>
            <Link href="/">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="54"
                  height="54"
                  viewBox="0 0 362.5 349.57"
                >
                  <g
                    id="Layer_1"
                    data-name="Layer 1"
                    transform="translate(-662.5 -327.38)"
                  >
                    <path
                      id="Path_237"
                      data-name="Path 237"
                      d="M891,585.81c-15.5,29.75-30.88,59.24-47.65,91.14-16.64-32-31.76-61.27-47.27-91,7.94-15.5,15.88-30.88,25-48.4,6.93,12.86,12.86,24,18.78,35-1.76,4.23-3.41,8.23-5.36,12.93-.14.35-.29.71-.44,1.06,2.52,4.92,5.3,10.34,9.33,18.28,3.91-7.31,6.81-12.86,9.83-18.65q-5.31-10.34-10.62-20.63-20-38.79-39.92-77.44c-1.48-2.85-4-8.1-8.29-16.41-9.06-17.81-11.25-23.35-14.59-28.86,0,0-1.16-1.83-2.46-3.77-11.93-17.71-81.37-52-85.84-54.2q-14.37-27.79-29-55.59a25.533,25.533,0,0,0,1.77-1.89C708,353,751.73,378.45,796.86,404.92,827.87,464.42,859.38,525.05,891,585.81Z"
                      fill={darkMode ? "#fff" : "#000"}
                    />
                    <path
                      id="Path_238"
                      data-name="Path 238"
                      d="M1020.6,328.79q-62.39,36.3-124.66,72.85c-3,1.77-6.05,4-7.57,6.81-14.12,26.6-27.86,53.45-41.59,79.79,6.17,11.6,11.72,22.31,18.78,35.55,4.66-8.82,8.69-15.13,11.59-21.81,3.79-9.07,10.09-15.5,19.29-20.54,20.29-11.22,40-23.2,59.75-34.92,4.29-2.52,9.45-5.3,11.47-9.08C987,401.39,1005.6,365.09,1025,328,1022.24,328.41,1021.23,328.41,1020.6,328.79ZM933.75,429a129.192,129.192,0,0,0-15.44,9.17,121.849,121.849,0,0,0-9.77,7.47c1.64-4.79,3.53-9.71,5.55-14.75,1.76-4.54,3.53-8.95,5.42-13.24l.12-.12.89-2.27c4.07-1.5,8.43-3.28,13-5.42,5.17-2.43,9.84-5,14-7.44Z"
                      fill={darkMode ? "#fff" : "#000"}
                    />
                  </g>
                </svg>
              </a>
            </Link>
          </FooterCopy>
        </FooterBase>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
