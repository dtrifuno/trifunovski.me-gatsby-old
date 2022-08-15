import React from "react";
import { useLocation } from "@reach/router";
import { Helmet } from "react-helmet";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

import appleTouchIcon from "../images/apple-touch-icon.png";
import favicon16 from "../images/favicon-16x16.png";
import favicon32 from "../images/favicon-32x32.png";

export interface SEOProps {
  title?: string;
  article?: boolean;
  description?: string | null;
  image?: string;
}

const SEO = (props: SEOProps) => {
  const { article, title, description, image } = props;
  const { pathname } = useLocation();

  const {
    title: defaultTitle,
    titleTemplate,
    description: defaultDescription,
    siteUrl: url,
    image: defaultImage,
    siteLanguage,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${url}/${image || defaultImage}`,
    url: `${url}${pathname}`,
  };

  return (
    <Helmet
      title={seo.title}
      titleTemplate={titleTemplate}
      htmlAttributes={{ lang: siteLanguage }}
    >
      <meta property="og:title" content={seo.title} />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta name="description" content={seo.description} />
      <meta property="og:description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterUsername} />
      <meta name="twitter:creator" content={twitterUsername} />

      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
    </Helmet>
  );
};

export default SEO;
