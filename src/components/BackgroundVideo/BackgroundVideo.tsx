import React from "react";
import styles from "./backgroundVideo.module.scss";
// @ts-ignore
import video from './video.mp4'

const BackgroundVideo: React.FC = () => {
  return (
    <div className={styles.backgroundVideoContainer}>
      <div className={styles.mask}/>
      <video autoPlay loop muted className={styles.backgroundVideo}>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
