import React from "react";
import styles from "./backgroundVideo.module.scss";

const BackgroundVideo: React.FC = () => {
  return (
    <div className={styles.backgroundVideoContainer}>
      <div className={styles.mask}/>
      <video autoPlay loop muted className={styles.backgroundVideo}>
        <source src="https://d28hdws53j511j.cloudfront.net/back.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
