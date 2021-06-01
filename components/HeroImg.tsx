import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Image.module.css";
import { buildUrl } from "cloudinary-build-url";
import Link from "next/link";
import {
  BrowserBack,
  BrowserWait,
  Dot,
  DotBox,
  HeroWrap,
  HeroWrapMock,
} from "./StyledComps";

const cloudID = process.env.NEXT_PUBLIC_IMG_ID;
export const url = buildUrl("remembertodoscreen_t668li", {
  cloud: {
    cloudName: cloudID,
  },
});
const urlM = buildUrl("iPhoneMockup", {
  cloud: {
    cloudName: cloudID,
  },
});

export const HeroImgMockUp = () => {
  return (
    <HeroWrapMock>
      <Link href={"https://remembertodo.vercel.app/"}>
        <a tw={" shadow-2xl"}>
          <Image
            tw={"z-5 "}
            src={urlM}
            alt="Project"
            width="1920"
            height="1500"
            layout="responsive"
            className={styles.image}
          />
        </a>
      </Link>
    </HeroWrapMock>
  );
};
const HeroImg = () => {
  const [loadImg, setLoadImg] = useState("");
  useEffect(() => {
    setTimeout(() => {
      return setLoadImg(url);
    }, 500);
  }, []);
  return (
    <HeroWrap>
      <Link href={"/projects"}>
        <a>
          {!loadImg && <BrowserWait />}
          {loadImg && (
            <Image
              tw={"z-10 "}
              src={url}
              alt="Project"
              width="1920"
              height="1080"
              layout="responsive"
              className={styles.image}
            />
          )}
        </a>
      </Link>
      <BrowserBack>
        <DotBox>
          <Dot tw={"hover:bg-red-700"} />
          <Dot tw={"hover:bg-green-700"} />
        </DotBox>
      </BrowserBack>
    </HeroWrap>
  );
};

export default HeroImg;
