import React from "react";
import Head from "next/head";

import { IMainInfo } from "@api/graphTypes";

interface ICustomHead {
  mainInfo: IMainInfo;
}

const CustomHead: React.FC<ICustomHead> = ({ mainInfo }) => {
  return (
    <Head>
      <title key="title" itemProp="headline">
        {mainInfo.siteTitle}
      </title>
      <link rel="canonical" href={mainInfo.siteDomain} />

      <meta name="title" content={mainInfo.siteTitle} />
      <meta
        itemProp="keywords"
        name="keywords"
        content={mainInfo.siteKeywords}
      />
      <meta
        itemProp="description"
        name="description"
        content={mainInfo.siteDescription}
      />

      <meta property="og:type" content="website" key="ogtype" />
      <meta property="og:title" content={mainInfo.siteTitle} key="ogtitle" />
      <meta property="og:image" content={mainInfo.ogImage.url} key="ogimage" />
      <meta property="og:url" content={mainInfo.siteDomain} key="ogurl" />
      <meta property="og:site_name" content="Speakwest" key="ogsitename" />
      <meta
        property="og:description"
        content={mainInfo.siteDescription}
        key="ogdesc"
      />

      <link rel="manifest" href="fav/manifest.json" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="robots" content="all" />
      <meta name="msapplication-TileImage" content="fav/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="fav/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="fav/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="fav/favicon-16x16.png"
      />
      <link rel="manifest" href="fav/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default CustomHead;
