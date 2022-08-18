import { GatsbyNode } from "gatsby";
import slugify from "@sindresorhus/slugify";
import path from "path";

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  actions,
  getNode,
}) => {
  const { createNodeField } = actions;

  // add slug field to all posts Mdx nodes
  if (node.internal?.type === `Mdx`) {
    const parent = getNode(node.parent as string);
    const sourceName = parent!.sourceInstanceName;

    if (sourceName === `posts`) {
      createNodeField({
        node,
        name: `slug`,
        value: `/posts/${slugify(node.frontmatter.title)}`,
      });
    }
  }
};

const blogPostTemplate = path.resolve(`src/components/PostTemplate.tsx`);

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMdx(
        filter: {
          internal: { contentFilePath: { glob: "**/content/posts/**" } }
        }
      ) {
        nodes {
          id
          fields {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  result.data.allMdx.nodes.forEach((node) => {
    createPage({
      path: `${node.fields.slug}`,
      component: `${blogPostTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
      },
    });
  });
};
