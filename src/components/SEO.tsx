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
};

const SEO = ({
  title,
  description,
  pathname = "",
  article,
}: Props): React.ReactElement => {
  const {
    title: defaultTitle,
    titleTemplate,
    description: defaultDescription,
    siteUrl,
    image,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: titleTemplate.replace("%s", title || defaultTitle),
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta property="og:title" content={seo.title} />

      <meta property="og:type" content={article ? "article" : "website"} />
      <meta name="description" content={seo.description} />
      <meta property="og:description" content={seo.description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterUsername} />
      <meta name="twitter:creator" content={twitterUsername} />

      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />

      <meta property="og:url" content={seo.url} />
    </>
  );
};

export default SEO;
