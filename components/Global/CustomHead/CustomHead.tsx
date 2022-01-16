import React from "react";
import Head from "next/head";

import { IMainInfo } from "@api/graphTypes";

interface ICustomHead {
  mainInfo: IMainInfo;
}

const CustomHead: React.FC<ICustomHead> = ({ mainInfo }) => {
  return (
    <Head itemscope itemtype="http://schema.org/WPHeader">
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
      <meta property="og:image" content="" key="ogimage" />
      <meta property="og:url" content={mainInfo.siteDomain} key="ogurl" />
      <meta property="og:site_name" content="Palatin-a" key="ogsitename" />
      <meta
        property="og:description"
        content={mainInfo.siteDescription}
        key="ogdesc"
      />

      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="robots" content="all" />
      <meta name="msapplication-TileImage" content="fav/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default CustomHead;
