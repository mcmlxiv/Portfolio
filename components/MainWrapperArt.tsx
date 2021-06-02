import React from "react";
import tw, { styled } from "twin.macro";

const MainWrapper = styled.main`
  ${tw` flex-1 flex flex-col justify-center items-center dark:text-whiteCream text-black w-full  `}
  grid-column:1 /-1;
`;

const Home = styled.div`
  ${tw`flex flex-1 w-full `}
`;

const Main = ({ part }) => {
  return (
    <MainWrapper id={"main"}>
      <Home>
        <div tw={"w-full"}>{part()}</div>
      </Home>
    </MainWrapper>
  );
};

export default Main;
