import Head from "next/head";
import FooterLoggedOut from "../components/layout/FooterLoggedOut";
import NavLoggedOut from "../components/layout/NavLoggedOut";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import style from "../styles/Admin.module.css";
import deleteButton from "./utils/deleteButton";
import { server } from "../config/index";
import Router from "next/router";
import useEffect from "react";
import useRouter from "next/router";
import Link from "next/link";

function notLoggedIn() {
  const cookies = parseCookies();
  const router = useRouter();

  useEffect(() => {
    console.log({ cookies });

    setCookie(null, "jwt", cookies.jwt, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });

    if (!cookies.jwt) {
      window.alert("You are not logged in.");
      router.push("/login");
    }
  }, []);
}

export default function Admin({ messages }) {
  notLoggedIn();

  return (
    <div>
      <Head>
        <title>Admin</title>
      </Head>
      <NavLoggedOut />
      <div className="main__container">
        <h2 className="h2">Welcome Back</h2>
        <div className={style.admin_menu}>
          <Link href="/addhotel">Add a New Hotel</Link>
        </div>
        <h2 className={style.h1}>Messages</h2>
        {messages.data.map((message) => (
          <div className={style.message__row} key="messagerow">
            <div className={style.message__name} key="name">
              <h2 className={style.h2}>Name</h2>
              {message.attributes.name}
            </div>
            <div className={style.message__email}>
              <h2 className={style.h2}>Email</h2>
              {message.attributes.email}
            </div>
            <div className={style.message__message}>
              <h2 className={style.h2}>Message</h2>

              {message.attributes.message}
            </div>
            <div className={style.button__wrapper}>
              <a className={style.a} href="">
                Reply
              </a>
              <a
                className={style.a_delete}
                href=""
                onClick={() => deleteButton(message.messageID)}
              >
                Delete
              </a>
            </div>
          </div>
        ))}
      </div>

      <FooterLoggedOut />
    </div>
  );
}

export async function getStaticProps() {
  const message_res = await fetch(`${server}/api/messages`);
  const messages = await message_res.json();

  return {
    props: {
      messages: messages,
    },
  };
}
