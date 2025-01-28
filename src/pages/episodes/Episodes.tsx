import { Image } from "@mantine/core";
import { motion } from "framer-motion";
import React, { FC, useState } from "react";
import cn  from "classnames";

import { IEpisodesProps } from "./episodes.props";
import { Button, PageTitle } from "../../components";
import { IEpisode_MOCK } from "../../data";

import styles from "./episodes.module.scss";

export const Episodes: FC<IEpisodesProps> = () => {
  const [openSteam, setOpenSteam] = useState(false);
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className={styles.product_header}>
        <div className={styles.product_name}>
          <PageTitle>Episodes</PageTitle>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div
          className={cn(styles.stream, {
            [styles.streamOpen]: openSteam,
          })}>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/icXfdiXPU0g?si=8gvAHlrTLAiKl77v"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></iframe>
          <div>
            <h2>Visually Impaired Runner Lisa Thompson: I am NOT quitting</h2>
            <p>
              Runnerview with Kat & Lisa Thompson @modernbnb the owner of Modern City Properties @moderncityproperties,
              a visionary entrepreneur in the real estate industry. Lisa is also a runner! She won visually impaired
              division of the Boston Marathon, with Olympic runner and award-winning filmmaker Alexi Pappas @alexipappas
              as her guide. Twice the President of BCRR (Bayou City Road Runners) @houstonBCRR a local prominent running
              club. @runnerviewwithkat
            </p>
          </div>
        </div>
        <div className={styles.product_grid}>
          {IEpisode_MOCK.map((episodes) => (
            <div className={styles.product_card} key={episodes.id} onClick={() => setOpenSteam(true)}>
              <div className={styles.product_thumbnail}>
                <Image src={episodes?.image} alt="" className={styles.product_img} />
                <div className={styles.product_mask}></div>
              </div>
              <span className={styles.episode_name}>{episodes.number}</span>
              <div className={styles.productButton}>
                <i className="icon-social-youtube"></i>
                {/*<a target="_blank" rel="noreferrer" href={episodes.linkYouTube} className={styles.productButtonYoutube}>*/}
                {/*  <i className="icon-social-youtube"></i>*/}
                {/*  YouTube*/}
                {/*</a>*/}
                {/*<a target="_blank" rel="noreferrer" href={episodes.linkSpotify} className={styles.productButtonSpotify}>*/}
                {/*  <i className="icon-social-spotify"></i>*/}
                {/*  Spotify*/}
                {/*</a>*/}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
