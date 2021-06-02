import React, { useContext, useState } from "react";
import tw, { styled } from "twin.macro";
import Hamburger from "./Hamburger";
import Menu from "./Menu";
import Link from "next/link";
import FullMenu from "./FullMenu";
import { ThemeContext } from "../types.models";

const NavBarWrapper = styled.div`
  ${tw`   flex-1 flex flex-col justify-center items-center  xl:px-72 lg:py-10  text-whiteCream `}
  grid-column:full-start/full-end;
`;

const Header = ({ part, disabledNav }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { darkMode } = useContext(ThemeContext);

  return (
    <NavBarWrapper>
      <div
        tw={
          "w-full h-full px-6 py-4 flex flex-col gap-4 lg:gap-12 overflow-hidden dark:text-white text-black"
        }
      >
        <div>
          <header
            tw={"flex justify-between pb-5 flex-1 items-center overflow-hidden"}
          >
            <Link href="/">
              <a>
                <div tw={"flex flex-1 items-center py-5"}>
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
                  <div tw={"px-4 text-xs "}>
                    <h2>
                      JOHN
                      <br />
                      POPO
                    </h2>
                  </div>
                </div>
              </a>
            </Link>
            <FullMenu {...{ open, disabledNav }} />
            <div tw={"flex flex-1 flex-col md:hidden"}>
              <Hamburger {...{ open, setOpen }} />
              <Menu {...{ open, setOpen, disabledNav }} />
            </div>
          </header>
        </div>
        <div>
          <section tw={"flex flex-col flex-1 gap-20 overflow-hidden"}>
            {part()}
          </section>
        </div>
      </div>
    </NavBarWrapper>
  );
};

export default Header;
