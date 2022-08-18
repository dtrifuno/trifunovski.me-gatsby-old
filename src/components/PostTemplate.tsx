import * as React from "react";
import { graphql } from "gatsby";
import clsx from "clsx";
import { MDXProvider } from "@mdx-js/react";

import { bibliographyComponents } from "./Bibliography";
import Date from "./Date";
import Layout from "./Layout";

const shortcodes = {
  ...bibliographyComponents,
};

const PostTemplate = ({ data: { mdx }, children }: any): React.ReactElement => {
  return (
    <Layout>
      <div className={clsx("my-3 md:my-5")}>
        <article
          className={clsx("mx-auto prose prose-primary prose-lg max-w-3xl")}
        >
          <div className={clsx("uppercase font-bold text-gray-400 my-0")}>
            <Date isoString={mdx.frontmatter.date} />
          </div>
          <h1>{mdx.frontmatter.title}</h1>
          <MDXProvider components={shortcodes}>{children}</MDXProvider>
        </article>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
      }
    }
  }
`;

export default PostTemplate;
