import React, { useState } from "react";

export const UserPost = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://dogsapi.origamid.dev/json/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        placeholder="username"
        onChange={({ target }) => setUsername(target.value)}
      />
      <input
        type="text"
        value={password}
        placeholder="password"
        onChange={({ target }) => setPassword(target.value)}
      />
      <input
        type="text"
        value={email}
        placeholder="email"
        onChange={({ target }) => setEmail(target.value)}
      />
      <button>Enviar</button>
    </form>
  );
};
