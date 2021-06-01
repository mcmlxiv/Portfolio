import React from "react";
import Lottie from "react-lottie";
import animationData from "../public/typingAnim.json";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const LottieAnimation = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const spacingsH = matches ? 400 : 200;
  const spacingsW = matches ? 550 : 250;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div tw={" pl-8"}>
      <Lottie options={defaultOptions} height={spacingsH} width={spacingsW} />
    </div>
  );
};

export default LottieAnimation;
