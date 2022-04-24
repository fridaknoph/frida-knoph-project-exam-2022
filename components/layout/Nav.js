import Head from "next/head";
import Hotels from "../../pages/hotels";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

export default function Nav() {
  return (
    <div>
      <div className="nav__row">
        <div className="nav__logo">
          <a href="/">
            <h1 className="logo">Holidaze</h1>
          </a>
          <div className="slogan">Make your stay the best</div>
        </div>
        <div className="nav__links__row">
          <div className="nav__links">
            <Link href="/">
              <a href="/" className="nav__logo">
                Holidaze
              </a>
            </Link>
            <Link href="/hotels">
              <a href="/hotels">Our Hotels</a>
            </Link>
            <Link href="/contact">
              <a href="/contact">Contact</a>
            </Link>
            <Link href="/visitbergen">
              <a href="/visitbergen">Visit Bergen</a>
            </Link>
          </div>
          <div className="nav__search">
            <Link href="/login">
              <a href="/login">Log In</a>
            </Link>
            <input className="search" placeholder="Search..."></input>
          </div>
        </div>
      </div>
    </div>
  );
}
