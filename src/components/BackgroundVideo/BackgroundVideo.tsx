import React from "react";
import styles from "./backgroundVideo.module.scss";

const BackgroundVideo: React.FC = () => {
  return (
    <div className={styles.backgroundVideoContainer}>
      <div className={styles.mask}/>
      <video autoPlay loop muted className={styles.backgroundVideo}>
        <source src="https://runnerview.s3.us-east-2.amazonaws.com/back.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
