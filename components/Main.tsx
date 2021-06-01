import React, { useContext } from "react";
import tw, { styled } from "twin.macro";
import { ThemeContext, dark } from "../types.models";
import Fade from "react-reveal/Fade";

const MainWrapper = styled.div<dark>`
  ${tw`flex-1 flex flex-col justify-center items-center dark:text-whiteCream text-black  xl:px-72 lg:py-10 px-8 py-5`}
  grid-column:full-start/full-end;
`;

const Home = styled.div`
  ${tw`flex flex-1 w-full lg:px-8 `}
`;

const Main = ({ part }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <MainWrapper id={"main"} {...{ darkMode }}>
      <Home>
        <Fade bottom>
          <div>{part()}</div>
        </Fade>
      </Home>
    </MainWrapper>
  );
};

export default Main;
