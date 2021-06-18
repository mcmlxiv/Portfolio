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
  HeroWrapProj,
  HeroWrapRemember,
} from "./StyledComps";

export const url = buildUrl("remembertodoscreen_t668li", {
  cloud: {
    cloudName: "mcmlxiv",
  },
});
export const urlM = buildUrl("iPhoneMockup", {
  cloud: {
    cloudName: "mcmlxiv",
  },
});

export const urlEcommM = buildUrl("ecomm_store_menu_hws9sx", {
  cloud: {
    cloudName: "mcmlxiv",
  },
});

export const urlEcommLogin = buildUrl("ecomm_store_login_ywoo9g", {
  cloud: {
    cloudName: "mcmlxiv",
  },
});

export const urlStoreFront = buildUrl("ecomm_store_front_g7kxsr", {
  cloud: {
    cloudName: "mcmlxiv",
  },
});
export const urlBlogFront = buildUrl("blog_concept_front_miyh05", {
  cloud: {
    cloudName: "mcmlxiv",
  },
});
export const urlBlogPage = buildUrl("blog_concept_page_mmf8al", {
  cloud: {
    cloudName: "mcmlxiv",
  },
});

interface link {
  url: string;
}
export const HeroImgProject: React.FC<link> = ({ url }) => {
  return (
    <HeroWrapProj>
      <Link href={"https://remembertodo.vercel.app/"}>
        <a>
          <Image
            src={url}
            alt="RememberTodo"
            width="1920"
            height="1080"
            layout="responsive"
            className={styles.image}
          />
        </a>
      </Link>
      <BrowserBack>
        <DotBox>
          <Dot tw={"hover:bg-red-700"} />
          <Dot tw={"hover:bg-green-700"} />
        </DotBox>
      </BrowserBack>
    </HeroWrapProj>
  );
};
export const HeroImgRemember: React.FC<link> = ({ url }) => {
  return (
    <HeroWrapRemember>
      <Link href={"https://mcmlxivstarbucks.vercel.app/"}>
        <a tw={" shadow-2xl border-2 border border-gray-300"}>
          <div tw={"border-2 border border-gray-300 z-10 "}>
            <Image
              src={url}
              alt="Project"
              width="1920"
              height="1080"
              layout="responsive"
              className={styles.image}
            />
          </div>
        </a>
      </Link>
    </HeroWrapRemember>
  );
};

export const HeroImgMockUp: React.FC<link> = ({ url }) => {
  return (
    <HeroWrapMock>
      <Link href={"https://remembertodo.vercel.app/"}>
        <a tw={" shadow-2xl"}>
          <Image
            tw={"z-5 "}
            src={url}
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
