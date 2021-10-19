import React from "react";
import Head from "next/head";

const CustomHead = () => {
  return (
    <Head itemscope itemtype="http://schema.org/WPHeader">
      <title key="title" itemProp="headline">
        Template
      </title>
      <link rel="canonical" href="" />

      <meta name="title" content="" />
      <meta itemProp="description" name="description" content="" />
      <meta itemProp="keywords" name="keywords" content="" />

      <meta property="og:type" content="website" key="ogtype" />
      <meta property="og:title" content="" key="ogtitle" />
      <meta property="og:description" content="" key="ogdesc" />
      <meta property="og:image" content="" key="ogimage" />
      <meta property="og:url" content="" key="ogurl" />
      <meta property="og:site_name" content="Palatin-a" key="ogsitename" />

      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="robots" content="all" />
      <meta name="msapplication-TileImage" content="fav/ms-icon-144x144.png" />
      <meta name="theme-color" content="#000000" />
    </Head>
  );
};

export default CustomHead;
