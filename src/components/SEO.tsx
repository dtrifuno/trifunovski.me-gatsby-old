import * as React from "react";

import { useSiteMetadata } from "../hooks/useSiteMetadata";
import appleTouchIcon from "../images/apple-touch-icon.png";
import favicon16 from "../images/favicon-16x16.png";
import favicon32 from "../images/favicon-32x32.png";

type Props = {
  title?: string;
  description?: string;
  pathname?: string;
  article?: boolean;
  featuredImage?: any; // FIXME
};

const SEO = ({
  title,
  description,
  pathname = "",
  article,
  featuredImage,
}: Props): React.ReactElement => {
  const {
    title: defaultTitle,
    titleTemplate,
    description: defaultDescription,
    siteUrl,
    twitterUsername,
    featuredImage: defaultImage,
  } = useSiteMetadata();

  const seo = {
    twitterUsername,
    title: titleTemplate.replace("%s", title || defaultTitle),
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
    image: `${siteUrl}${(featuredImage || defaultImage).images.fallback.src}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta property="og:title" content={seo.title} />

      <meta property="og:type" content={article ? "article" : "website"} />
      <meta name="description" content={seo.description} />
      <meta property="og:description" content={seo.description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="og:image" content={seo.image} />
      <meta name="twitter:site" content={seo.twitterUsername} />
      <meta name="twitter:creator" content={seo.twitterUsername} />

      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />

      <meta property="og:url" content={seo.url} />
    </>
  );
};

export default SEO;
