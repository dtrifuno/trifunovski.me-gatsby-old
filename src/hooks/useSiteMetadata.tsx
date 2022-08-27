import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

GatsbyImage;
export type ImageDataType = {};

interface SiteMetadataQuery {
  site: {
    siteMetadata: {
      description: string;
      image: string;
      title: string;
      titleTemplate: string;
      authorName: string;
      twitterUsername: string;
      siteUrl: string;
    };
  };
  file: any; // FIXME
}

export const useSiteMetadata = () => {
  const data = useStaticQuery<SiteMetadataQuery>(graphql`
    query {
      site {
        siteMetadata {
          title
          titleTemplate
          description
          twitterUsername
          siteUrl
        }
      }
      file(absolutePath: { glob: "**/src/images/image.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 1200)
        }
      }
    }
  `);

  return {
    ...data.site.siteMetadata,
    featuredImage: data.file.childImageSharp.gatsbyImageData,
  };
};
