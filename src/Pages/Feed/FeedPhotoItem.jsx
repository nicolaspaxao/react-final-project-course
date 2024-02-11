import React from "react";
import styles from "./FeedPhotoItem.module.css";

export const FeedPhotoItem = ({ photo }) => {
  return (
    <li className={styles.photo}>
      <img src={photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  );
};
