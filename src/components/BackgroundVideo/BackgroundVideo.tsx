import React from "react";
import styles from "./backgroundVideo.module.scss";

const BackgroundVideo: React.FC = () => {
  return (
    <div className={styles.backgroundVideoContainer}>
      <div className={styles.mask}/>
      <video autoPlay loop muted className={styles.backgroundVideo}>
        <source src="/video/video1.mp4" type="video/mp4" />
        <source src="/video/video1.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
