import React, { useContext } from "react";
import styles from "./PhotoContent.module.css";
import { Link } from "react-router-dom";
import { PhotoComments } from "./PhotoComments";
import { UserContext } from "../../UserContext";
import { PhotoDelete } from "./PhotoDelete";
import { ImageWidget } from "../Helpers/Image/Image";

export const PhotoContent = ({ data }) => {
  const user = useContext(UserContext);
  const { photo, comments } = data;
  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <ImageWidget src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username == photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}

            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} ano(s)</li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
};
