import { Image } from "@mantine/core";
import { motion } from "framer-motion";
import React, { FC } from "react";

import { IEpisodesProps } from "./episodes.props";
import { PageTitle } from "../../components";
import { IEpisode_MOCK } from "../../data";

import styles from "./episodes.module.scss";

export const Episodes: FC<IEpisodesProps> = () => (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className={styles.product_header}>
        <div className={styles.product_name}>
          <PageTitle>Episodes</PageTitle>
        </div>
      </div>
      <div className={styles.product_grid}>
        {IEpisode_MOCK.map((episodes) => (
          <div className={styles.product_card} key={episodes.id}>
            <div className={styles.product_thumbnail}>
              <Image src={episodes?.image} alt="" className={styles.product_img} />
              <div className={styles.product_mask}></div>
            </div>
            <span className={styles.episode_name}>{episodes.number}</span>
            <a target="_blank" rel="noreferrer" href={episodes.link} className={styles.product_button}>
              Watch on YouTube
            </a>
          </div>
        ))}
      </div>
    </motion.section>
  );
