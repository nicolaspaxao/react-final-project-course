import React, { Suspense, lazy, useEffect } from "react";
import { Head } from "../../../Components/Helpers/Head/Head";
import { useFetch } from "../../../Hooks/useFetch";
import { STATS_GET } from "../../../api";
import { LoadingWidget } from "../../../Components/Helpers/Loading/Loading";
import { ErrorWidget } from "../../../Components/Helpers/Error/Error";
import { UserStatsGraphs } from "./UserStatsGraphs";

export const UserStats = () => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <LoadingWidget />;
  if (error) return <ErrorWidget error={error} />;
  if (data)
    return (
      <>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </>
    );
  return null;
};
