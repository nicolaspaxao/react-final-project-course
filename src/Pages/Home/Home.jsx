import React from "react";
import { Feed } from "../Feed/Feed";
import { Head } from "../../Components/Helpers/Head/Head";

export const Home = () => {
  return (
    <section className="container mainContainer">
      <Head
        title="Fotos"
        description="Home do site Dogs, com o feed de fotos."
      />
      <Feed />
    </section>
  );
};
