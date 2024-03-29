import React, { useEffect, useState } from "react";
import { UserHeaderNav } from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

export const UserHeader = () => {
  const [title, setTitle] = useState();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/conta/estatisticas":
        setTitle("Estatística");
        break;
      case "/conta/postar":
        setTitle("Poste Sua Foto");
        break;
      default:
        setTitle("Minha Conta");
        break;
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};
