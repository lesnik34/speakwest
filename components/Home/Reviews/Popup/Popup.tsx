import React, { useEffect, useState } from "react";
import api from "@api/requests";
import Image from "next/image";
import { ERating } from "@api/graphTypes";
import starIcon from "@assets/svg/star.svg";
import emptyStarIcon from "@assets/svg/empty_star.svg";
import styles from "./Popup.module.scss";

interface IPopup {
  setVisible: any;
}

const Popup: React.FC<IPopup> = ({ setVisible }) => {
  const [status, setStatus] = useState("await");
  const [rating, setRating] = useState("five");
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const stars = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
  } as any;

  const getIcon = (e: ERating, i: number) => {
    return stars[e] >= i + 1 ? starIcon : emptyStarIcon;
  };

  const textStatus: any = {
    error: { text: "Произошла ошибка, попробуйте снова", class: styles.error },
    success: {
      text: "Успешно отправленно! Добавим после проверки",
      class: styles.success,
    },
    loading: { text: "Отправка...", class: styles.loading },
    await: { text: "", class: styles.await },
  };

  useEffect(() => {
    if (status === "error" || status === "success") {
      setTimeout(() => setStatus("await"), 8000);
    }
  }, [status]);

  const submitHandler = async (e: any) => {
    e.preventDefault();

    if (!name || !text) {
      setStatus("error");
    }
    setStatus("loading");

    const data = await api.sendReview({ name, text, rating });
    setStatus(data.status as string);
  };

  const onClose = () => {
    if (status !== "loading") {
      setVisible(false);
    }
  };

  const onStarClick = (i: number) => {
    const reverseStar = ["one", "two", "three", "four", "five"];

    setRating(reverseStar[i]);
  };

  return (
    <div className={styles.popup}>
      <form onSubmit={submitHandler} className={styles.popup_form}>
        <div className={styles.popup_inputs}>
          <input
            className={styles.popup_name}
            type="text"
            placeholder="Имя"
            required
            maxLength={30}
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />

          <textarea
            className={styles.popup_area}
            rows={10}
            cols={35}
            maxLength={400}
            required
            name="text"
            placeholder="Ваш отзыв"
            value={text}
            onChange={(e: any) => setText(e.target.value)}
          />

          <ul className={styles.popup_list}>
            {new Array(5).fill(0).map((_, i) => (
              <li
                className={styles.popup_item}
                key={i}
                onClick={() => {
                  onStarClick(i);
                }}
              >
                <Image
                  src={getIcon(rating as any, i)}
                  className={styles.popup_icon}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                  alt="Звезда рейтинга"
                />
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.popup_buttons}>
          <span
            className={`${styles.popup_status} ${textStatus[status].class}`}
          >
            {textStatus[status].text}
          </span>

          <button className={styles.popup_button} disabled={status !== "await"}>
            Отправить
          </button>
        </div>
      </form>

      <div className={styles.popup_overlay} onClick={onClose} />
    </div>
  );
};

export default Popup;
