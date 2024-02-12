import React from "react";
import { Input } from "../../Components/Forms/Input/Input";
import { Button } from "../../Components/Forms/Button/Button";
import { ErrorWidget } from "../../Components/Helpers/Error/Error";
import { useForm } from "../../Hooks/useForm";
import { useFetch } from "../../Hooks/useFetch";
import { PASSWORD_LOST } from "../../api";
import { Head } from "../../Components/Helpers/Head/Head";

export const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar"),
      });
      await request(url, options);
    }
  }

  return (
    <section>
      <Head title="Perdeu a senha?" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="email" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}

      <ErrorWidget error={error} />
    </section>
  );
};
