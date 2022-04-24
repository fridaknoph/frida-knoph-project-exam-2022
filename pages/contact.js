import { useForm } from "react-hook-form";
import { server } from "../config/index";
import * as yup from "yup";
import Head from "next/head";
import { yupResolver } from "@hookform/resolvers/yup";
import Footer from "../components/layout/Footer.js";
import Nav from "../components/layout/Nav.js";
import { useState } from "react";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your First Name")
    .min(3, "Must be at least 3 characters"),
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  message: yup
    .string()
    .required("Please enter your Message")
    .min(10, "Must be at least 10 characters"),
});

export default function Contact() {
  const [messageName, setMessageName] = useState("");
  const [messageEmail, setMessageEmail] = useState("");
  const [messageMessage, setMessageMessage] = useState("");

  async function addMessage() {
    const messageInfo = {
      name: messageName,
      email: messageEmail,
      message: messageMessage,
    };

    const add = await fetch(`${server}/api/messages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ data: messageInfo }),
    });

    try {
      const addResponse = await add.json();
      console.log(addResponse);

      if (addResponse.data.attributes.createdAt) {
        window.alert("Message sent!");
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
        <title>Contact</title>
      </Head>
      <Nav></Nav>
      <div className="main__container">
        <h2 className="h2">Contact</h2>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div>Name</div>
          <input
            className="form__input"
            {...register("firstname")}
            onChange={(e) => setMessageName(e.target.value)}
            value={messageName}
          />
          {errors.firstname && (
            <span className="error__message">{errors.firstname.message}</span>
          )}

          <div>Email</div>
          <input
            className="form__input"
            {...register("email")}
            onChange={(e) => setMessageEmail(e.target.value)}
            value={messageEmail}
          />
          {errors.email && (
            <span className="error__message">{errors.email.message}</span>
          )}

          <div>Your Message</div>
          <input
            className="form__input__message"
            {...register("message")}
            onChange={(e) => setMessageMessage(e.target.value)}
            value={messageMessage}
          />
          {errors.message && (
            <span className="error__message">{errors.message.message}</span>
          )}

          <button className="default__button" onClick={() => addMessage()}>
            Send
          </button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
}
