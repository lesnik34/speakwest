import React from "react";

import { IMainInfo } from "@api/graphTypes";
import styles from "./Contacts.module.scss";

interface IContacts {
  mainInfo: IMainInfo;
}

const Contacts: React.FC<IContacts> = ({ mainInfo }) => {
  return (
    <div className={styles.contacts}>
      {mainInfo.phones.length !== 0 && (
        <div className={styles.contacts_wrapper}>
          <h3 className={styles.contacts_title}>Наши телефоны:</h3>

          <ul className={styles.contacts_list}>
            {mainInfo.phones.map((el) => (
              <li key={el.id} className={styles.contacts_item}>
                <a href={`tel:${el.phone}`} className={styles.contacts_link}>
                  {el.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {mainInfo.medias.length !== 0 && (
        <div className={styles.contacts_wrapper}>
          <h3 className={styles.contacts_title}>Мы в соц. сетях:</h3>

          <ul className={styles.contacts_list}>
            {mainInfo.medias.map((el) => (
              <li key={el.id} className={styles.contacts_item}>
                <a href={el.link} className={styles.contacts_link}>
                  {el.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Contacts;
