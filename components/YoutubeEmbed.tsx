import React from "react";
import { styled } from "twin.macro";

const VideoWrap = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;

  > iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;

interface ID {
  embedID: string;
}
const YoutubeEmbed: React.FC<ID> = ({ embedID }) => {
  return (
    <VideoWrap>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedID}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </VideoWrap>
  );
};

export default YoutubeEmbed;
