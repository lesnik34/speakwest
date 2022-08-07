import React from "react";
import ReactPlayer from "react-player";

import styles from "./Video.module.scss";

interface IVideo {
  title: string;
  url: string;
}

const Video: React.FC<IVideo> = ({ title, url }) => {
  return (
    <div className={styles.video}>
      <div className="container">
        <div className={styles.video_wrapper}>
          <h2 className={styles.video_title}>{title}</h2>

          <div className={styles.video_container}>
            <div className={styles.video_wrap}>
              <ReactPlayer
                url={url}
                width="100%"
                height="100%"
                config={{
                  youtube: {
                    playerVars: { showinfo: 1 },
                  },
                }}
                className={styles.video_player}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
