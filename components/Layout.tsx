import React, { ReactChildren } from "react";
import Footer from "./Footer";

interface layoutProps {
  children: ReactChildren;
}
const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
