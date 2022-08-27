import * as React from "react";
import clsx from "clsx";

import Layout from "./Layout";

interface Props {
  children?: React.ReactNode;
}

export const DefaultPageLayout = ({ children }: Props): React.ReactElement => {
  return (
    <Layout>
      <div className={clsx("my-3", "md:my-5")}>
        <main
          className={clsx("mx-auto prose prose-primary prose-lg max-w-3xl")}
        >
          {children}
        </main>
      </div>
    </Layout>
  );
};
