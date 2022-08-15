import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Home`,
    titleTemplate: `%s · Darko Trifunovski`,
    description: `Darko Trifunovski's personal website and blog`,
    image: ``,
    authorName: `Darko Trifunovski`,
    twitterUsername: `@dtrifuno`,
    siteLanguage: `en`,
    siteUrl: `https://www.trifunovski.me`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "posts",
        path: "./content/posts/",
      },
      __key: "posts",
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        // defaultLayouts: {
        //   posts: require.resolve("./src/components/PostsLayout.tsx"),
        // },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-katex`,
          },
        ],
      },
    },
  ],
};

export default config;
