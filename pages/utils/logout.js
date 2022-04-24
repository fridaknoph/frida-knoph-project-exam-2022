import React from "react";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import Router from "next/router";

export default async function Logout() {
  try {
    const cookies = parseCookies();
    console.log({ cookies });

    setCookie(null, "jwt", "jwt", {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });

    if (cookies.jwt) {
      destroyCookie(null, "jwt");
    }
  } catch (error) {
    console.log(error);
  }

  Router.push("/login");
}
