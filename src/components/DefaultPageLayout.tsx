import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import clsx from "clsx";

import Layout from "./Layout";
import SEO from "./SEO";

interface Props {
  children?: React.ReactNode;
}

export const DefaultPageLayout = ({ children }: Props): React.ReactElement => {
  return (
    <Layout>
      <div className={clsx("my-3", "md:my-5")}>
        <article
          className={clsx("mx-auto prose prose-primary prose-lg max-w-3xl")}
        >
          <MDXProvider components={{ SEO }}>{children}</MDXProvider>
        </article>
      </div>
    </Layout>
  );
};
