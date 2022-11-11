import Head from "next/head";
import { server } from "../../config/index";
import Nav from "../../components/layout/Nav";
import Footer from "../../components/layout/Footer";
import Image from "next/image";
import style from "../../styles/DetailsPage.module.css";
import StarIcon from "@mui/icons-material/Star";
import { yellow } from "@mui/material/colors";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";

export default function Product({ hotel }) {
  console.log(hotel);
  return (
    <div>
      <Head>
        <title>{hotel.attributes.name}</title>
      </Head>
      <Nav></Nav>
      <div className="main__container">
        <div className={style.details__container}>
          <Link href="/hotels">
            <a>Back to Hotels</a>
          </Link>

          <h1 className="h1">{hotel.attributes.name}</h1>
          <div className={style.star_wrapper}>
            <StarIcon sx={{ color: yellow[800] }} />
            {hotel.attributes.stars} Stars
          </div>
          <div className={style.img__wrapper}>
            <Image
              className="my_img"
              src={`${server}${hotel.attributes.image.data.attributes.url}`}
              width={630}
              height={400}
            />
          </div>
          <div className={style.pricebonus__container}>
            <div className={style.details__bonus__container}>
              <span className={style.bonus__text}>
                {hotel.attributes.bonus}
              </span>
              <div className={style.details__rating__container}>
                <span className={style.details__rating}>
                  {hotel.attributes.rating}
                </span>{" "}
                Very Good
              </div>
              <div className={style.description}>
                {hotel.attributes.description}
              </div>
              <div className={style.socials}>
                <Link href="https://www.instagram.com/">
                  <a>
                    <InstagramIcon />
                  </a>
                </Link>
                <Link href="https://twitter.com/">
                  <a>
                    <TwitterIcon />
                  </a>
                </Link>
                <Link href="https://www.facebook.com/">
                  <a>
                    <FacebookIcon />
                  </a>
                </Link>
              </div>
              <a href="">See all recommendations</a>
            </div>
            <span className={style.price__wrapper}>
              <div className={style.details__price}>
                ${hotel.attributes.price}
              </div>
              <span>Included Everything*</span>
              <button className="default__button">Book Your Stay</button>
            </span>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export async function getStaticPaths() {
  const hotel_res = await fetch(`${server}/api/hotels?populate=image/`);
  const hotels = await hotel_res.json();

  const paths = hotels.data.map((hotel) => ({
    params: { slug: hotel.attributes.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const hotel_res = await fetch(
    `${server}/api/hotels?populate=image&slug=${slug}`
  );
  const data = await hotel_res.json();
  const found = data.data.find((hotel) => hotel.attributes.slug === slug);

  return {
    props: {
      hotel: found,
    },
  };
}
