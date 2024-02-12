import React, { useContext } from "react";
import { Input } from "../../Components/Forms/Input/Input";
import { Button } from "../../Components/Forms/Button/Button";
import { ErrorWidget } from "../../Components/Helpers/Error/Error";
import { useForm } from "../../Hooks/useForm";
import { USER_POST } from "../../api";
import { UserContext } from "../../UserContext";
import { useFetch } from "../../Hooks/useFetch";
import { Head } from "../../Components/Helpers/Head/Head";

export const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const { userLogin } = useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <Head title="Criar Conta" />
      <h1 className="title"> Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="E-mail" type="text" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <ErrorWidget error={error} />
      </form>
    </section>
  );
};
