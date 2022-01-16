import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import Link from "next/link";

import Navigation from "@components/Global/Navigation";
import Burger from "@components/Global/Burger";
import { RootState } from "@store/.";

import styles from "./Header.module.scss";

interface IHeader {
  title: string;
  logo: { url: string };
}

const Header: React.FC<IHeader> = ({ logo }) => {
  const { isMobile } = useSelector(
    (state: RootState) => state.global,
    shallowEqual
  );

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header_wrapper}>
          <Link href="/">
            <a className={styles.header_logoWrapper}>
              <div
                className={styles.header_logo}
                style={{ backgroundImage: `url("${logo.url}")` }}
              />

              {/* <span className={styles.header_title}>{title}</span> */}
            </a>
          </Link>

          {!isMobile && <Navigation />}
        </div>
      </div>

      {isMobile && <Burger />}
    </header>
  );
};

export default Header;
