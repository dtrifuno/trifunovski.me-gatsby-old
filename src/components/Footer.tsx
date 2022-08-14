import { Link } from "gatsby";
import * as React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-center text-white mt-3 bt-2 border-t-2 border-primary-500">
      <div className="text-center text-gray-700 p-4">
        Darko Trifunovski © 2021&ndash;2022. Built with Gatsby&mdash;source code
        available on{" "}
        <a
          className="font-medium underline"
          href="https://github.com/dtrifuno/trifunovski.me"
        >
          Github
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
