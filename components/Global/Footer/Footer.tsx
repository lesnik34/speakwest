import React from "react";

import { ISchoolInfo } from "@api/graphTypes";

import styles from "./Footer.module.scss";

interface IFooter {
  schools: ISchoolInfo[];
  logo: { url: string };
}

const Footer: React.FC<IFooter> = ({ schools, logo }) => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer_wrapper}>
          <ul className={styles.footer_list}>
            {schools.map((el, i) => (
              <li key={el.id} className={styles.footer_item}>
                <a href={el.url} target="_blank" className={styles.footer_link}>
                  <div
                    className={styles.footer_logo}
                    style={{ backgroundImage: `url(${el.logoFull.url})` }}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.footer_logoWrapper}>
            <div
              style={{ backgroundImage: `url(${logo.url})` }}
              className={styles.footer_siteLogo}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
