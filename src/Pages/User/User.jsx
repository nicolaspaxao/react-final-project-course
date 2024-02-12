import React, { useContext } from "react";
import { UserHeader } from "./components/UserHeader";
import { Route, Routes } from "react-router-dom";
import { Feed } from "../Feed/Feed";
import { UserPhotoPost } from "./PhotoPost/UserPhotoPost";
import { UserStats } from "./Stats/UserStats";
import { UserContext } from "../../UserContext";
import { NotFound } from "../../NotFound";

export const User = () => {
  const { data } = useContext(UserContext);

  return (
    <section className="container">
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
