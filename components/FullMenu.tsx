import React, { useContext } from "react";
import Link from "next/link";
import SunMoon from "./SunMoon";
import { BurgerProps } from "../types.models";
import { ThemeContext } from "../types.models";
import { FullList, FullMovingLine, ListEle, SolidLine } from "./StyledComps";

const FullMenu: React.FC<BurgerProps> = ({ disabledNav }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div>
      <FullList>
        {disabledNav !== "home" && (
          <ListEle>
            <Link href="/" tw={"py-4 px-16"}>
              <a>HOME</a>
            </Link>
            {disabledNav === "home" ? (
              <SolidLine {...{ darkMode }} />
            ) : (
              <FullMovingLine {...{ darkMode }} />
            )}
          </ListEle>
        )}

        <ListEle>
          <Link href="/remembertodo" tw={"py-4 px-16"}>
            <a>PROJECTS</a>
          </Link>
          {disabledNav === "project" ? (
            <SolidLine {...{ darkMode }} />
          ) : (
            <FullMovingLine {...{ darkMode }} />
          )}
        </ListEle>
        <ListEle>
          <Link href="/art" tw={"py-4 px-16"}>
            <a>ART</a>
          </Link>
          {disabledNav === "art" ? (
            <SolidLine {...{ darkMode }} />
          ) : (
            <FullMovingLine {...{ darkMode }} />
          )}
        </ListEle>
        <ListEle>
          <Link href="/contact" tw={"py-4 px-16"}>
            <a>CONTACT</a>
          </Link>
          {disabledNav === "contact" ? (
            <SolidLine {...{ darkMode }} />
          ) : (
            <FullMovingLine {...{ darkMode }} />
          )}
        </ListEle>
        <li>
          <SunMoon />
        </li>
      </FullList>
    </div>
  );
};

export default FullMenu;
