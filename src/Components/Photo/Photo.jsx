import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";
import { PHOTO_GET } from "../../api";
import { ErrorWidget } from "../Helpers/Error/Error";
import { LoadingWidget } from "../Helpers/Loading/Loading";
import { PhotoContent } from "./PhotoContent";

export const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);
  if (error) return <ErrorWidget error={error} />;
  if (loading) return <LoadingWidget />;
  if (data)
    return (
      <section className="container mainContainer">
        <PhotoContent data={data} single={true} />
      </section>
    );
  else return null;
};
