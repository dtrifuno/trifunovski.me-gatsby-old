import * as React from "react";
import { graphql, Link } from "gatsby";
import clsx from "clsx";
import _ from "lodash";

import Layout from "../../components/Layout";
import Date from "../../components/Date";
import SEO from "../../components/SEO";

interface Props {
  data: {
    allMdx: {
      edges: [
        {
          node: {
            id: string;
            frontmatter: {
              draft: boolean;
              title: string;
              date: string;
            };
            fields: {
              slug: string;
            };
          };
        }
      ];
    };
  };
}

const BlogPosts = ({ data }: Props): React.ReactElement => {
  const { edges } = data.allMdx;
  const posts = edges.map((post) => ({
    year: post.node.frontmatter.date.slice(0, 4),
    ...post.node,
  }));
  const groupedPosts = _.groupBy(posts, (x) => x.year);

  const years = Object.keys(groupedPosts).sort().reverse();

  return (
    <Layout>
      <SEO title="Posts" />
      <div className={clsx("my-3", "md:my-5")}>
        <article className={clsx("mx-auto max-w-3xl")}>
          <ul className="list-none list-inside">
            {years.map((year) => (
              <li key={year} className="mt-5 mb-9">
                <h3 className="text-2xl font-bold mb-3">{year}</h3>
                <ul className="list-none list-inside">
                  {groupedPosts[year].map((post) => (
                    <li key={post.fields.slug} className="my-5">
                      <div className="uppercase font-bold text-gray-400 my-0 py-0">
                        <Date isoString={post.frontmatter.date} />
                      </div>
                      <Link className="text-xl" to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allMdx(
      filter: {
        frontmatter: { draft: { ne: true } }
        internal: { contentFilePath: { glob: "**/content/posts/**" } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default BlogPosts;
