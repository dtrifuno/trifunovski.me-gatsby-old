import path from "path";
import { GatsbyNode } from "gatsby";
import slugify from "@sindresorhus/slugify";
import { format as formatDate } from "date-fns";

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions }) => {
    const { createTypes } = actions;
    const typeDefs = `
      type Mdx implements Node {
        frontmatter: Frontmatter
      }
      type Frontmatter {
        draft: Boolean
        date: Date! @dateformat
      }
    `;
    createTypes(typeDefs);
  };

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
      const { draft, title, date } = node.frontmatter as any;

      const prefix = draft ? "/drafts/" : "/posts/";
      const formattedDate = formatDate(date, "yyMMdd");
      const slugifiedTitle = slugify(title);

      const slug = `${prefix}${formattedDate}-${slugifiedTitle}`;

      createNodeField({
        node,
        name: `slug`,
        value: slug,
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

  const result = (await graphql(`
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
      site {
        siteMetadata {
          titleTemplate
          siteUrl
        }
      }
    }
  `)) as any;

  const { siteUrl, titleTemplate } = result.data.site.siteMetadata;

  result.data.allMdx.nodes.forEach((node) => {
    createPage({
      path: `${node.fields.slug}`,
      component: `${blogPostTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
        siteUrl,
        titleTemplate,
      },
    });
  });
};
