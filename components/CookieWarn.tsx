import React, { useContext } from "react";
import tw, { styled } from "twin.macro";
import { openC, ThemeContext } from "../types.models";
import Fade from "react-reveal/Fade";
import { bg } from "./StyledComps";

const CookieWrapper = styled.section<openC>`
  ${tw`   flex-1  justify-around lg:justify-center items-center bg-gray-300  lg:p-4 p-2 max-h-24 text-black font-light `}
  grid-column:full-start/full-end;

  display: ${({ closeCookie, open }) =>
    closeCookie || open ? `none` : `flex`};
  width: ${(props) => (!props.closeCookie ? "100%" : 0)};
  opacity: ${(props) => (!props.closeCookie ? 1 : 0)};

  transition-property: opacity, width;
  transition-duration: 0.3s;
  transition-delay: 0.1s;
  transition-timing-function: ease-out;
  will-change: auto;
  background-repeat: no-repeat;
  background-image: none;
  background-size: 200%;

  @media only screen and (min-width: 960px) {
    background-image: url("https://products.ls.graphics/mesh-gradients/images/01.-Royal-Heath.jpg");
    color: black;
    animation: ${bg} 8s cubic-bezier(0.77, 0, 0.175, 1) 2s infinite;
  }
`;
const CloseCookie = styled.div`
  ${tw`   lg:px-8 px-2 fill-current text-gray-600 hover:text-black cursor-pointer`};

  @media only screen and (min-width: 960px) {
    margin-left: 95%;
  }
`;

const CookieWarn = () => {
  const [closeCookie, setCloseCookie] = React.useState<boolean>(false);
  const { open, darkMode } = useContext(ThemeContext);

  const handleCloseCookie = () => {
    setCloseCookie(!closeCookie);
  };
  return (
    <CookieWrapper {...{ closeCookie, open, darkMode }}>
      <Fade right when={!open} delay={500} duration={1000}>
        <div tw={"flex flex-1 items-center justify-center gap-2 xl:mr-52"}>
          <h1>
            This website uses cookies to improve your user experience. By
            continuing to use this website you consent to its use.
          </h1>
          <svg
            tw={"hidden lg:inline"}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            display="block"
            id="Coffee"
          >
            <path d="M11 7c4.418 0 8 .895 8 2s-3.582 2-8 2-8-.895-8-2c0-.357.375-.693 1.033-.984" />
            <path d="M3 9v9.343c0 1.061.44 2.08 1.409 2.513C5.624 21.399 7.711 22 11 22c3.29 0 5.377-.601 6.591-1.144.968-.433 1.409-1.452 1.409-2.513V9" />
            <path d="M19 10v0a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3v0" />
            <path d="M7 3v4" />
            <path d="M11 2v2" />
            <path d="M15 4v3" />
          </svg>
        </div>
        <CloseCookie {...{ open }} onClick={handleCloseCookie}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            display="block"
            id="Cross"
          >
            <path d="M20 20L4 4m16 0L4 20" />
          </svg>
        </CloseCookie>
      </Fade>
    </CookieWrapper>
  );
};

export default CookieWarn;
