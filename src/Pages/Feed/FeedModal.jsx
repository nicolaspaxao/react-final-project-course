import React, { useEffect } from "react";
import styles from "./FeedModal.module.css";
import { useFetch } from "../../Hooks/useFetch";
import { ErrorWidget } from "../../Components/Helpers/Error/Error";
import { LoadingWidget } from "../../Components/Helpers/Loading";
import { PHOTO_GET } from "../../api";
import { PhotoContent } from "../../Components/Photo/PhotoContent";

export const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhoto() {
      const { url, options } = PHOTO_GET(photo.id);
      await request(url, options);
    }

    fetchPhoto();
  }, [request, photo]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <ErrorWidget error={error} />}
      {loading && <LoadingWidget />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};
