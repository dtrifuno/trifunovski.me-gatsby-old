import * as React from "react";
import { graphql } from "gatsby";
import clsx from "clsx";
import { MDXProvider } from "@mdx-js/react";

import { bibliographyComponents } from "./Bibliography";
import Date from "./Date";
import Layout from "./Layout";
import SEO from "./SEO";

const shortcodes = {
  ...bibliographyComponents,
};

const PostTemplate = ({ data: { mdx }, children }: any): React.ReactElement => {
  return (
    <Layout>
      <main className={clsx("my-3 md:my-5")}>
        <article
          className={clsx("mx-auto prose prose-primary prose-lg max-w-3xl")}
        >
          <div className={clsx("uppercase font-bold text-gray-400 my-0")}>
            <Date isoString={mdx.frontmatter.date} />
          </div>
          <h1>{mdx.frontmatter.title}</h1>
          <MDXProvider components={shortcodes}>{children}</MDXProvider>
        </article>
      </main>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        draft
        description
      }
    }
  }
`;

export const Head = ({ location, data: { mdx } }: any) => {
  const { pathname } = location;
  const { title, description, draft } = mdx.frontmatter;

  return (
    <SEO
      title={`${draft ? "[DRAFT] " : ""}${title}`}
      description={description}
      pathname={pathname}
      article
    />
  );
};

export default PostTemplate;
