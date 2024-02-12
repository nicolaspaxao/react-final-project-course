import React, { useContext } from "react";
import { UserHeader } from "./components/UserHeader";
import { Route, Routes } from "react-router-dom";
import { Feed } from "../Feed/Feed";
import { UserPhotoPost } from "./PhotoPost/UserPhotoPost";
import { UserStats } from "./Stats/UserStats";
import { UserContext } from "../../UserContext";
import { NotFound } from "../../NotFound";
import { Head } from "../../Components/Helpers/Head/Head";

export const User = () => {
  const { data } = useContext(UserContext);

  return (
    <section className="container">
      <Head title="Minha Conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};
