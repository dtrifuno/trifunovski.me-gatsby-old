import * as React from "react";
import clsx from "clsx";
import { Link } from "gatsby";

interface HeaderProps {
  links?: { title: string; to: string }[];
}

const Header: React.FC<HeaderProps> = ({ links = [] }) => {
  return (
    <header className={clsx("border-b-2 border-primary-500 mb-1 px-3")}>
      {/* <div className={clsx("max-w-4xl mx-auto px-4 sm:px-8 lg:px-10")}> */}
      <div className={clsx("max-w-3xl mx-auto")}>
        <div
          className={clsx("relative flex items-center justify-between sm:h-14")}
        >
          <h1 className={clsx("text-2xl py-2 font-semibold")}>
            Darko Trifunovski
          </h1>
          <div
            className={clsx(
              "flex-1 flex items-center justify-center",
              "sm:items-stretch sm:justify-end"
            )}
          >
            <div className={clsx("flex-shrink-0 flex items-center")}>
              <nav className={clsx("hidden sm:block sm:ml-6")}>
                <ul className={clsx("list-none flex space-x-4")}>
                  {links.map((link) => (
                    <li key={link.title + link.to}>
                      <Link
                        className={clsx(
                          "px-2 py-1 font-medium text-xl",
                          "text-gray-600 lowercase hover:text-primary-500"
                        )}
                        activeClassName={clsx(
                          "text-primary-500 border-b-2 border-primary-500"
                        )}
                        to={link.to}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
