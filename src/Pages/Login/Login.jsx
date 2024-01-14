import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { LoginPasswordLost } from "./LoginPasswordLost";
import { LoginCreate } from "./LoginCreate";
import { LoginPasswordReset } from "./LoginPasswordReset";
import { UserContext } from "../../UserContext";

export const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
};
