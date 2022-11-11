import Head from "next/head";
import FooterLoggedOut from "../components/layout/FooterLoggedOut";
import NavLoggedOut from "../components/layout/NavLoggedOut";
import style from "../styles/AddHotel.module.css";
import { server } from "../config/index";
import Link from "next/link";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import notLoggedIn from "./utils/notLoggedIn";
import { useRouter } from "next/router";
import Router from "next/router";
import { useForm } from "react-hook-form";
import { parseCookies } from "nookies";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter a Name")
    .min(3, "Must be at least 3 characters"),

  slug: yup
    .string()
    .required("Please enter a Key")
    .min(3, "Must be at least 3 characters"),

  numericValue: yup.number().required("Must Be a Number"),

  description: yup
    .string()
    .required("Please enter your Message")
    .min(10, "Must be at least 10 characters"),

  offers: yup
    .string()
    .required("Please enter your Message")
    .min(10, "Must be at least 10 characters"),
});

export default function AddHotel() {
  const [hotelName, setHotelName] = useState("");
  const [hotelDescription, setHotelDescription] = useState("");
  const [hotelPrice, setHotelPrice] = useState("");
  const [hotelStar, setHotelStar] = useState("");
  const [hotelRating, setHotelRating] = useState("");
  const [hotelOffers, setHotelOffers] = useState("");
  const [hotelSlug, setHotelSlug] = useState("");

  notLoggedIn();

  async function Add() {
    const HotelInfo = {
      name: hotelName,
      email: hotelDescription,
      price: hotelPrice,
      stars: hotelStar,
      rating: hotelRating,
      bonus: hotelOffers,
      slug: hotelSlug,
    };

    const add = await fetch(`${server}/api/hotels`, {
      method: "POST",
      headers: {
        Authorization: `Bearer`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ data: HotelInfo }),
    });

    const addResponse = await add.json();
    console.log(addResponse.data);

    if (addResponse.data.attributes.createdAt) {
      window.alert("Hotel Added!");
      location.reload();
      return false;
    }
    if (!addResponse.data.attributes.createdAt) {
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
        <title>Add a Hotel</title>
      </Head>
      <NavLoggedOut />
      <div className="main__container">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="h2">Add a Hotel</h2>
          <div className={style.admin_menu}>
            <Link href="/admin">Back To Messages</Link>
          </div>
          <div>Name</div>
          <div className={style.hotel__desc}>Name of your Hotel</div>
          <input
            className="form__input"
            onChange={(e) => setHotelName(e.target.value)}
            value={hotelName}
          ></input>
          {errors.name && (
            <span className="error__message">{errors.name.message}</span>
          )}

          <div>Description</div>
          <div className={style.hotel__desc}>Add a description</div>
          <input
            className="form__input__message"
            onChange={(e) => setHotelDescription(e.target.value)}
            value={hotelDescription}
          ></input>
          {errors.description && (
            <span className="error__message">{errors.description.message}</span>
          )}

          <div className={style.number__container}>
            <span className={style.number__child}>
              <div>Price</div>
              <div className={style.hotel__desc}>
                Price for staying one night
              </div>
              <input
                type="number"
                min="10"
                max="1000"
                className={style.form__input__number}
                onChange={(e) => setHotelPrice(e.target.value)}
              ></input>
              {errors.numericValue && (
                <span className="error__message">
                  {errors.numericValue.message}
                </span>
              )}
            </span>

            <span className={style.number__child}>
              <div>Stars</div>
              <div className={style.hotel__desc}>Stars given</div>
              <input
                type="number"
                min="1"
                max="10"
                className={style.form__input__number}
                onChange={(e) => setHotelStar(e.target.value)}
              ></input>
              {errors.numericValue && (
                <span className="error__message">
                  {errors.numericValue.message}
                </span>
              )}
            </span>

            <span className={style.number__child}>
              <div>Rating</div>
              <div className={style.hotel__desc}>Rating given by costumers</div>
              <input
                type="number"
                min="1"
                max="10"
                className={style.form__input__number}
                onChange={(e) => setHotelRating(e.target.value)}
              ></input>
              {errors.numericValue && (
                <span className="error__message">
                  {errors.numericValue.message}
                </span>
              )}
            </span>
          </div>

          <div>Offers</div>
          <div className={style.hotel__desc}>
            Special service offers given by the hotel
          </div>
          <input
            className="form__input__message"
            onChange={(e) => setHotelOffers(e.target.value)}
          ></input>
          {errors.offers && (
            <span className="error__message">{errors.offers.message}</span>
          )}

          <div>Slug</div>
          <div className={style.hotel__desc}>Key for your code</div>
          <input
            className="form__input"
            onChange={(e) => setHotelSlug(e.target.value)}
            value={hotelSlug}
          ></input>
          {errors.name && (
            <span className="error__message">{errors.name.message}</span>
          )}

          <div>
            <div>Image</div>
            <div className={style.hotel__desc}>Add a Image to your Hotel</div>
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
            ></input>
          </div>

          <button className={style.default__button} onClick={() => Add()}>
            Add
          </button>
        </form>
      </div>

      <FooterLoggedOut />
    </div>
  );
}
