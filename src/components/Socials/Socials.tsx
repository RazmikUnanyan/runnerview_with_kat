import React, { FC } from "react";

import styles from "./socials.module.scss";
import { ISocialsProps } from "./socials.props";
import { LinkIcon } from "../_ui";

export const Socials: FC<ISocialsProps> = ({ ...props }) => (
  <div className={styles.socials} {...props}>
    <LinkIcon to="https://www.instagram.com/runnerview_with_kat/" target="_blank">
      <i className="icon-social-instagram"></i>
    </LinkIcon>
    <LinkIcon to="https://www.youtube.com/@RunnerviewWithKat" target="_blank">
      <i className="icon-social-youtube"></i>
    </LinkIcon>
    <LinkIcon to="#" target="_blank">
      <i className="icon-social-facebook"></i>
    </LinkIcon>
  </div>
);
