import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../Components/Forms/Input/Input";
import { Button } from "../../Components/Forms/Button/Button";
import { useForm } from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import { ErrorWidget } from "../../Components/Helpers/Error/Error";
import styles from "./LoginForm.module.css";
import stylesBtn from "../../Components/Forms/Button/Button.module.css";
import { Head } from "../../Components/Helpers/Head/Head";

export const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <section className="animeLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button disabled={loading}>
          {loading ? "Carregando..." : "Entrar"}
        </Button>
        <ErrorWidget error={error && "Dados incorretos."} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};
