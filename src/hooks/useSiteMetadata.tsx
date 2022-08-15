import { graphql, useStaticQuery } from "gatsby";

interface SiteMetadataQuery {
  site: {
    siteMetadata: {
      description: string;
      image: string;
      siteLanguage: string;
      title: string;
      titleTemplate: string;
      authorName: string;
      twitterUsername: string;
      siteUrl: string;
    };
  };
}

export const useSiteMetadata = () => {
  const data = useStaticQuery<SiteMetadataQuery>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitterUsername
          image
          siteUrl
        }
      }
    }
  `);
  return data.site.siteMetadata;
};
