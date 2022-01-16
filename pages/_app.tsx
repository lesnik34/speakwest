import React from "react";
import App from "next/app";
import { Provider } from "react-redux";

import store from "@store/.";
import Resize from "@components/Global/Resize";

import "@styles/index.scss";

class MyApp extends App {
  static getInitialProps = async ({ Component, ctx }: any) => ({
    pageProps: {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    },
  });

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <Resize />

        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MyApp;
