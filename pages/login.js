import Head from "next/head";
import { useForm } from "react-hook-form";
import Router from "next/router";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import { useState } from "react";
import { server } from "../config/index";
import { setCookie } from "nookies";

const schema = yup.object().shape({
  username: yup.string().required("Please enter an username"),
  password: yup.string().required("Please enter an password"),
});

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const loginInfo = JSON.stringify({
      identifier: username,
      password: password,
    });

    try {
      const login = await fetch(`${server}/api/auth/local`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: loginInfo,
      });

      const loginResponse = await login.json();

      setCookie(null, "jwt", loginResponse.jwt, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });

      if (loginResponse.jwt) {
        Router.push("/admin");
      }

      if (!loginResponse.jwt) {
        window.alert("Invalid User Credentials");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {}

  return (
    <div>
      <Head>
        <title>Log in</title>
      </Head>
      <Nav></Nav>

      <div className="main__container">
        <h2 className="h2">Log in</h2>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div>Username</div>
          <input
            type="username"
            className="form__input"
            {...register("username")}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <div>
            {errors.username && (
              <span className="error__message">{errors.username.message}</span>
            )}
          </div>

          <div>Password</div>
          <input
            type="password"
            autoComplete="current-password"
            className="form__input"
            {...register("password")}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div>
            {errors.password && (
              <span className="error__message">{errors.password.message}</span>
            )}
          </div>

          <button onClick={() => handleLogin()} className="default__button">
            Log in
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
