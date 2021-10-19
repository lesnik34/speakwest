import React from "react";
import { AppProps } from "next/dist/shared/lib/router/router";

import Layout from "@components/Global/Layout";

import "@styles/index.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
