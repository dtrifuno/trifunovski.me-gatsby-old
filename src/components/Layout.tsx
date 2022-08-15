import * as React from "react";
import clsx from "clsx";

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div
      className={clsx(
        "flex flex-col h-screen justify-between overflow-y-scroll"
      )}
    >
      <Header
        links={[
          { title: "About", to: "/" },
          { title: "Projects", to: "/projects" },
          { title: "Posts", to: "/posts" },
        ]}
      />

      <main className={clsx("mb-auto")}>
        <div className={clsx("px-6")}>{children}</div>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
