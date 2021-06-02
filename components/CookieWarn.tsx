import React, { useContext } from "react";
import tw, { styled } from "twin.macro";
import { openC, ThemeContext } from "../types.models";

const CookieWrapper = styled.section<openC>`
  ${tw`   flex-1  justify-around items-center bg-gray-300  lg:p-4 p-2 max-h-24 text-black font-light `}
  grid-column:full-start/full-end;

  display: ${({ openCookie, open }) => (openCookie || open ? `none` : `flex`)};
`;
const CloseCookie = styled.div`
  ${tw`   lg:px-8 pr-2 fill-current text-gray-600 hover:text-black cursor-pointer`}
`;

const CookieWarn = () => {
  const [openCookie, setOpenCookie] = React.useState<boolean>(false);
  const { open } = useContext(ThemeContext);

  const handleOpenCookie = () => {
    setOpenCookie(!openCookie);
  };
  return (
    <CookieWrapper {...{ openCookie, open }}>
      <div tw={"flex flex-1 items-center justify-center gap-2"}>
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
      <CloseCookie {...{ open }} onClick={handleOpenCookie}>
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
    </CookieWrapper>
  );
};

export default CookieWarn;
