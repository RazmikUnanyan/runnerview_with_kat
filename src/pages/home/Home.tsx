import { motion } from "framer-motion";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./home.module.scss";
import { IHomeProps } from "./home.props";
import { Button, Socials } from "../../components";
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo";

export const Home: FC<IHomeProps> = () => {
  const navigate = useNavigate();
  return (
    <motion.section className={styles.home} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <BackgroundVideo/>
      <div className={styles.intro}>
        <h1 className={styles.home_name}>Runnerview With Kat </h1>
        <Socials />
        <Button onClick={() => navigate("/episodes")}>episodes</Button>
      </div>
    </motion.section>
  );
};
