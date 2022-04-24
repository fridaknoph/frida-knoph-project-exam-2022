import Head from "next/head";
import Link from "next/link";
import Nav from "../components/layout/Nav.js";
import Footer from "../components/layout/Footer.js";
import style from "../styles/VisitBergen.module.css";
import SlideshowNatue from "./Slideshows/SlideshowNature.js";
import SlideshowCity from "./Slideshows/SlideshowCity.js";

export default function Visit() {
  return (
    <>
      <div>
        <Head>
          <title>Visit Bergen</title>
        </Head>
        <Nav></Nav>

        <div className="main__container">
          <img
            className="header__img"
            src="https://frontstudent.com/exam2022/header_visitbergen.png"
          />
          <div className={style.bergen__container}>
            <h2 className={style.h2}>Visit Bergen</h2>
            <div className={style.bergen__description}>
              Bergen got everything to offer, if you're looking for hiking,
              relaxation or even party. In every hotel listed on this site the
              staff will make sure all your wishes will come true.
            </div>
            <span className={style.button__wrapper}></span>
          </div>
          <h2 className="center__h2">Nature And Hiking</h2>
          <SlideshowNatue />
          <div className={style.description}>
            Beautiful Norweigan nature surrounds Bergen and its a sight to see.
            Take a day and hike and see the beautiful moutains.
          </div>
          <div className={style.button__wrapper}>
            <Link href="/hotels">
              <button className={style.def__button}>Book Your Stay </button>
            </Link>
          </div>

          <h2 className="center__h2">See The City</h2>
          <SlideshowCity />
          <div className={style.description}>
            Bergen is alive both day and night. If you're looking for a nice
            calm resturant, you got that. Or if you're looking for a cool trendy
            bar, you got that as well!
          </div>
          <div className={style.button__wrapper}>
            <Link href="/hotels">
              <button className={style.def__button}>Book Your Stay </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
