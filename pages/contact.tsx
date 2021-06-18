import React, { useContext } from "react";
import tw, { styled } from "twin.macro";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ThemeContext, ThemeProps, dark } from "../types.models";
import Meta from "../components/Meta";
import { ContactHeader } from "../components/HeaderParts";
import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";
import SocialIcons from "../components/SocialIcons";
import Fade from "react-reveal/Fade";
import { ContactContainer } from "../components/StyledComps";
import CookieWarn from "../components/CookieWarn";

const Contact: React.FC<ThemeProps> = ({
  darkMode,
  toggleDarkMode,
  toggleSetOpen,
  open,
}) => {
  const themes = {
    //Props for Context dist
    toggleDarkMode,
    darkMode,
    toggleSetOpen,
    open,
  };

  const disabledNav = "contact";
  return (
    <>
      <ContactContainer {...{ darkMode }}>
        <Meta title={"JP - Full-Stack Developer Contact"} />
        <ThemeContext.Provider value={themes}>
          <CookieWarn />
          <Header part={ContactHeader} disabledNav={disabledNav} />
          <ContactMainWrap part={ContactMain} />
          <Footer />
        </ThemeContext.Provider>
      </ContactContainer>
    </>
  );
};

export default Contact;

const ContactMain = () => {
  const [state, handleSubmit] = useForm("mzbyrbon");
  if (state.succeeded) {
    return (
      <div
        tw={
          "flex flex-col flex-1 justify-center items-center lg:text-4xl lg:mx-96"
        }
      >
        <Fade bottom>
          <h1 tw={"font-semibold mt-4 text-center pl-20 pb-20"}>
            Thanks for the Message!
            <br />
            <h2>Will get back to you shortly.</h2>
          </h1>
        </Fade>
      </div>
    );
  }
  return (
    <div tw={"flex md:flex-row flex-1 flex-col justify-center"}>
      <Fade bottom>
        <div tw={"flex m-auto w-full  "}>
          <div tw={"flex items-center   "}>
            <div tw={"container mx-auto"}>
              <div tw={"mx-auto my-10 px-5 rounded"}>
                <div tw={"text-center"}>
                  <h1
                    tw={
                      "text-3xl font-semibold text-black dark:text-white py-4"
                    }
                  >
                    Contact Me
                  </h1>
                  <p tw={"text-gray-400 dark:text-gray-400"}>
                    Fill up the form below to send me a message.
                  </p>
                </div>
                <div tw={"m-7"}>
                  <form onSubmit={handleSubmit}>
                    <div tw="mb-6">
                      <label
                        htmlFor="name"
                        tw="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="John Doe"
                        required
                        tw="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                      />
                    </div>
                    <div tw="mb-6">
                      <label
                        htmlFor="email"
                        tw="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="you@company.com"
                        required
                        tw="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                    <div tw="mb-6">
                      <label
                        htmlFor="phone"
                        tw="text-sm text-gray-600 dark:text-gray-400"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="+1 (867) 1234-567"
                        required
                        tw="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                      />
                    </div>
                    <div tw="mb-6">
                      <label
                        htmlFor="message"
                        tw="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        Your Message
                      </label>

                      <textarea
                        rows={5}
                        name="message"
                        id="message"
                        placeholder="Your Message"
                        tw="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                        required
                      />
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                    </div>
                    <div tw="mb-6">
                      <button
                        type="submit"
                        tw="w-full px-3 py-4 text-white bg-blue-500 rounded-md focus:bg-blue-900 focus:outline-none hover:border border-black"
                      >
                        Send Message
                      </button>
                    </div>
                    <p tw="text-base text-center text-gray-400" id="result" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            tw={"py-20  flex flex-1 gap-2 flex-col w-full md:max-h-10 px-10 "}
          >
            <div tw={"cursor-pointer text-xl hover:font-semibold mb-4"}>
              <Link href="mailto:mcmlxiv512@gmail.com">
                <a>mcmlxiv512@gmail.com</a>
              </Link>
            </div>
            <SocialIcons />
          </div>
        </div>
      </Fade>
    </div>
  );
};

const MainWrapper = styled.div<dark>`
  ${tw`flex-1 flex flex-col justify-center items-center dark:text-whiteCream text-black xl:px-72 py-5`}
  grid-column:full-start/full-end;
`;

const Home = styled.div`
  ${tw`flex flex-1 w-full lg:px-8 `}
`;

const ContactMainWrap = ({ part }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <MainWrapper id={"main"} {...{ darkMode }}>
      <Home>
        <div>{part()}</div>
      </Home>
    </MainWrapper>
  );
};
