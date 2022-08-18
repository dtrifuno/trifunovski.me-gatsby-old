import * as React from "react";
import { graphql } from "gatsby";
import Layout from "./Layout";
import Date from "./Date";
import clsx from "clsx";

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
          {children}
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
