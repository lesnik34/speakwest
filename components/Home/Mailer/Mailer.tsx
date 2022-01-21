import React, { useState, useEffect } from "react";
import Link from "next/link";

import api from "@api/requests";
import Mailcon from "@assets/jsx/MailIcon";

import styles from "./Mailer.module.scss";

const Mailer = () => {
  const [status, setStatus] = useState("await");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [text, setText] = useState("");

  const textStatus: any = {
    error: { text: "Произошла ошибка, попробуйте снова", class: styles.error },
    success: { text: "Успешно отправленно!", class: styles.success },
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

    if (!email || !tel || !text) {
      setStatus("error");
    }
    setStatus("loading");

    const { data } = await api.sendEmail({ email, text, tel });
    setStatus(data.status as string);
  };

  return (
    <div className={styles.mailer}>
      <div className="container">
        <div className={styles.mailer_wrapper}>
          <h2 className={styles.mailer_title}>Остались вопросы?</h2>

          <form onSubmit={submitHandler} className={styles.mailer_form}>
            <div className={styles.mailer_inputs}>
              <div className={styles.mailer_inputsMain}>
                <input
                  className={styles.mailer_email}
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
                />

                <input
                  className={styles.mailer_tel}
                  type="tel"
                  placeholder="Телефон"
                  required
                  value={tel}
                  onChange={(e: any) => setTel(e.target.value)}
                />
              </div>

              <textarea
                className={styles.mailer_area}
                rows={10}
                cols={35}
                maxLength={200}
                required
                name="text"
                placeholder="Ваше сообщение"
                value={text}
                onChange={(e: any) => setText(e.target.value)}
              />
            </div>

            <div className={styles.mailer_image}>
              <Mailcon className={styles.mailer_icon} />
            </div>

            <div className={styles.mailer_buttons}>
              <span
                className={`${styles.mailer_status} ${textStatus[status].class}`}
              >
                {textStatus[status].text}
              </span>

              <button
                className={styles.mailer_button}
                disabled={status !== "await"}
              >
                Отправить
              </button>

              <span
                className={styles.mailer_numbers}
              >{`${text.length}/200`}</span>

              <p className={styles.mailer_docs}>
                Нажимая «Отправить», Вы соглашаетесь с
                <Link href="/">
                  <a className={styles.mailer_politics}>
                    {` политикой обработки персональных данных`}
                  </a>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Mailer;
