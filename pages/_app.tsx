import GlobalStyles from "./../components/GlobalStyles";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

const App = ({ Component, pageProps }) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    (() => {
      const themeLS = localStorage.getItem("theme");
      //Null checking
      if (themeLS) {
        document.documentElement.className = themeLS;
        const themeBin = themeLS !== "light";
        setDarkMode(themeBin);
      }
      return null;
    })();
  }, [darkMode]);
  const toggleDarkMode = () => {
    //SetDark mode on state and LS
    setDarkMode(!darkMode);
    localStorage.setItem("theme", `${!darkMode ? "dark" : "light"}`);
  };

  const toggleSetOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <GlobalStyles />
      <ThemeProvider attribute="class">
        <Component
          {...pageProps}
          {...{ darkMode, setDarkMode, toggleDarkMode, open, toggleSetOpen }}
        />
      </ThemeProvider>
    </div>
  );
};

export default App;
