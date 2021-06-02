import React, { Dispatch, SetStateAction } from "react";

export interface BurgerProps {
  setOpen?: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  darkMode?: boolean;
  disabledNav?: string;
  toggleSetOpen?: () => void;
}

export interface dark {
  darkMode?: boolean;
  toggleDarkMode?: () => void;
  setDarkMode?: Dispatch<SetStateAction<boolean>>;
}

export interface darker {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export interface ThemeProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
  toggleSetOpen?: () => void;
  open?: boolean;
}
export const ThemeContext = React.createContext<ThemeProps>({
  toggleDarkMode: () => void {},
  darkMode: false,
  toggleSetOpen: () => void {},
  open: false,
});

export interface openC {
  openCookie?: boolean;
  open?: boolean;
}
