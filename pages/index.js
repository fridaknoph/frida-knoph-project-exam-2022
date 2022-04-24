import Head from "next/head";
import Nav from "../components/layout/Nav.js";
import Footer from "../components/layout/Footer.js";
import style from "../styles/HomePage.module.css";
import Image from "next/dist/client/image";
import Link from "next/link";
import Slideshow from "./Slideshows/Slideshow";
import { Slide } from "@mui/material";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Home</title>
        </Head>
        <Nav></Nav>

        <div className="main__container">
          <img
            className="header__img"
            src="https://frontstudent.com/exam2022/header_home.png"
          />
          <div className={style.home__container}>
            <img
              className={style.home__img}
              src="https://frontstudent.com/exam2022/home1.jpg"
            />

            <div className={style.home__container__coloumn}>
              <h2 className={style.h2}>Welcome to Holidaze</h2>
              <div className={style.home__description}>
                Here you can browse trough diffrent type of hotels, in the
                lovely city of Bergen. We have a 100% costumers guarantee and
                safety. Start your Bergen adventure here with us!
              </div>
              <div className={style.home__bonus}>
                <span>✓ Most Popular Hotels</span>
                <span>✓ Free Cancellation</span>
                <span>✓ Change your stay whenever</span>
                <span className={style.button__wrapper}>
                  <Link href="/">
                    <button className={style.def__button}>
                      Book Your Stay{" "}
                    </button>
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <h2 className="center__h2">Our Hotels</h2>
          <Link href="/hotels">
            <a href="/hotels" className="li__hotels">
              See Our Hotels Here
            </a>
          </Link>
          <Slideshow />

          <h2 className="center__h2">Tourist Attractions</h2>

          <div className="tourism__images">
            <img
              src="https://frontstudent.com/exam2022/tourism1.jpg"
              className="img__tourism"
            />
            <img
              src="https://frontstudent.com/exam2022/tourism2.jpg"
              className="img__tourism"
            />
            <img
              src="https://frontstudent.com/exam2022/tourism3.jpg"
              className="img__tourism"
            />
          </div>
          <div className="description__tourism">
            <p>
              Bergen has a lot to offer in both city and nature, here you can
              experience everything.
            </p>
            <Link href="/visitbergen">
              <button className="default__button__tourism">See More</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
