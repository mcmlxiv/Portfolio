import React, { useContext } from "react";
import tw, { styled } from "twin.macro";
import {
  PlusDatabase,
  PlusFramework,
  PlusLang,
  PlusService,
} from "./PlusMinus";
import { ThemeContext } from "../types.models";

const AccordionWrap = styled.div`
  ${tw`  lg:text-lg flex flex-1 items-center `}

  cursor: pointer;
  width: 100%;
  transition: 0.4s;
`;
interface opens {
  panel: string;
}

const PanelLangauge = styled.div<opens>`
  ${tw`  dark:text-gray-200 text-gray-900 `}
  display: ${(p) => (p.panel !== "Language" ? `none` : `block`)};
  overflow: hidden;
`;

const PanelFramework = styled.div<opens>`
  ${tw`  dark:text-gray-200 text-gray-900 `}
  display: ${(p) => (p.panel !== "Framework" ? `none` : `block`)};
  overflow: hidden;
`;

const PanelDatabase = styled.div<opens>`
  ${tw`  dark:text-gray-200 text-gray-900 `}
  display: ${(p) => (p.panel !== "Database" ? `none` : `block`)};
  overflow: hidden;
`;

const PanelService = styled.div<opens>`
  ${tw`  dark:text-gray-200 text-gray-900 mb-4 `}
  display: ${(p) => (p.panel !== "Services" ? `none` : `block`)};
  overflow: hidden;
`;

const Acc = styled.div`
  ${tw`  flex flex-1 flex-col justify-between  md:hidden `}
  max-height:30rem;
`;

const Accordion = () => {
  const [panel, setPanel] = React.useState<string>("");
  const [close, setClose] = React.useState<string>("");

  const handlePanel = (lang) => {
    const setToNull = () => {
      setPanel("");
      setClose("");
    };
    const setToLang = () => {
      setClose(lang);
      setPanel(lang);
    };
    close === lang ? setToNull() : setToLang();
    console.log(lang);
  };
  const { darkMode } = useContext(ThemeContext);

  return (
    <Acc>
      <div tw={"cursor-pointer "}>
        <AccordionWrap
          className={"accordion"}
          onClick={handlePanel.bind(this, "Language")}
        >
          Language
          <PlusLang {...{ panel, darkMode }} />
        </AccordionWrap>
        <PanelLangauge {...{ panel }}>
          <h5>TypeScript</h5>
          <h5>JavaScript</h5>
          <h5>HTML</h5>
          <h5>CSS3</h5>
          <h5>SASS</h5>
          <h5>MatLab</h5>
        </PanelLangauge>
      </div>
      <div>
        <AccordionWrap
          className={"accordion"}
          onClick={handlePanel.bind(this, "Framework")}
        >
          Frameworks <PlusFramework {...{ panel, darkMode }} />
        </AccordionWrap>
        <PanelFramework {...{ panel }}>
          <h5>React</h5>
          <h5>NextJs</h5>
          <h5>GatsbyJs</h5>
          <h5>NodeJs</h5>
          <h5>Material Ui</h5>
          <h5>Styled-Components</h5>
          <h5>Tailwind</h5>
          <h5>Twin Macro</h5>
        </PanelFramework>
      </div>
      <div>
        <AccordionWrap
          className={"accordion"}
          onClick={handlePanel.bind(this, "Database")}
        >
          Database & Query <PlusDatabase {...{ panel, darkMode }} />
        </AccordionWrap>
        <PanelDatabase {...{ panel }}>
          <h5>MongoDB</h5>
          <h5>GraphQL</h5>
          <h5>Rest</h5>
        </PanelDatabase>
      </div>
      <div>
        <AccordionWrap
          className={"accordion"}
          onClick={handlePanel.bind(this, "Services")}
        >
          Services <PlusService {...{ panel, darkMode }} />
        </AccordionWrap>
        <PanelService {...{ panel }}>
          <h5>Netlify</h5>
          <h5>GhostCMS</h5>
          <h5>Contentful</h5>
          <h5>Vercel</h5>
          <h5>Heroku</h5>
          <h5>Adobe XD</h5>
          <h5>Adobe Photoshop</h5>
          <h5>Mlab</h5>
        </PanelService>
      </div>
    </Acc>
  );
};

export default Accordion;
