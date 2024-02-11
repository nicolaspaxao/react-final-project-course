import React, { useEffect } from "react";
import { FeedPhotoItem } from "./FeedPhotoItem";
import { useFetch } from "../../Hooks/useFetch";
import { PHOTOS_GET } from "../../api";
import { ErrorWidget } from "../../Components/Helpers/Error/Error";
import { LoadingWidget } from "../../Components/Helpers/Loading";
import styles from "./FeedPhotos.module.css";

export const FeedPhotos = ({ setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { json } = await request(url, options);
    }

    fetchPhotos();
  }, [request]);

  if (error) return <ErrorWidget error={error} />;
  if (loading) return <LoadingWidget />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotoItem
            photo={photo}
            key={photo.id}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};
