import Head from "next/head";
import Link from "next/link";
import { server } from "../config/index";
import Footer from "../components/layout/Footer.js";
import Nav from "../components/layout/Nav.js";
import Image from "next/image";

export default function Hotels({ hotels }) {
  return (
    <div>
      <Head>
        <title>Our Hotels</title>
      </Head>
      <Nav></Nav>
      <div className="main__container">
        <div className="hotels__row">
          <img
            className="header__img"
            src="https://frontstudent.com/exam2022/header___.png"
          />
          <h1 className="center__h2">Our Hotels</h1>
          {hotels.data.map((hotel) => (
            <>
              <a href={`details/${hotel.attributes.slug}`}>
                <h2 className="hotels__name">{hotel.attributes.name}</h2>
                <div className="img__wrapper">
                  <Image
                    className="my_img"
                    src={`${server}${hotel.attributes.image.data.attributes.url}`}
                    width={500}
                    height={320}
                  />
                </div>
              </a>
              <a className="a__link" href={``}>
                About the hotel
              </a>
            </>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export async function getStaticProps() {
  const hotel_res = await fetch(`${server}/api/hotels?populate=image`);
  const hotels = await hotel_res.json();

  return {
    props: {
      hotels: hotels,
    },
  };
}
