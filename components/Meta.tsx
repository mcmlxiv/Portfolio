import Head from "next/head";
import React from "react";
//there are third party tools like Next_SEO
//Seo meta data to pass to all props
const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="shortcut icon" href="/favi.svg" />
      <script
        src="https://kit.fontawesome.com/989d507cae.js"
        crossOrigin="anonymous"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap"
        rel="stylesheet"
      />

      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "JP - Full-Stack Developer",
  keywords: "web development, portfolio",
  description: "John Popo Web Dev Portfolio",
};

export default Meta;
