import React from "react";
import styles from "./FeedPhotoItem.module.css";
import { ImageWidget } from "../../Components/Helpers/Image/Image";

export const FeedPhotoItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }
  return (
    <li className={styles.photo} onClick={handleClick}>
      <ImageWidget src={photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  );
};
