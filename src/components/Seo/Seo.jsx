import React from 'react';
import {Helmet} from "react-helmet";

const SEO = ({ title }) => {
  return (
    <Helmet>
      <title>GINAP Consulting Canada - {title}</title>
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="GINAP Consulting Canada" />
      <meta property="og:locale" content="en_CA" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="alternate" hrefLang="en-CA" href="/" />
    </Helmet>
  );
};

export default SEO;
