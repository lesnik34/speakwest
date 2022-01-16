import React from "react";

import { IMainInfo, ISchoolInfo } from "@api/graphTypes";
import Footer from "@components/Global/Footer";
import Header from "@components/Global/Header";
import CustomHead from "@components/Global/CustomHead";
import GoogleTagManager from "@components/Global/GoogleTagManager";
import styles from "./Layout.module.scss";

interface LayoutI {
  children: JSX.Element | React.ReactNode;
  mainInfo: IMainInfo;
  schools: ISchoolInfo[];
}

const Layout: React.FC<LayoutI> = ({ children, mainInfo, schools }) => {
  return (
    <>
      <CustomHead mainInfo={mainInfo} />
      <Header title={mainInfo.siteName} logo={mainInfo.siteFullLogo} />

      <main className={styles.main}>
        <GoogleTagManager />
        {children}
      </main>

      <Footer schools={schools} logo={mainInfo.siteLogo} />
    </>
  );
};

export default Layout;
