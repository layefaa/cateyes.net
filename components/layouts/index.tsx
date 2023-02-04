// import { Navbar } from "components/organisms";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
      <>
        <main className={`px-24 min-h-full`}>{children}</main>
      </>
  );
};

export default Layout;