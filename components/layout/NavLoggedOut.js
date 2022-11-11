import Head from "next/head";
import Link from "next/link";
import Logout from "../../pages/utils/logout";

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
              <a className="nav__logo">Holidaze</a>
            </Link>
            <Link href="hotels">
              <a>Our Hotels</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
            <Link href="/visitbergen">
              <a>Visit Bergen</a>
            </Link>
          </div>
          <div className="nav__search">
            <Link href="/login">
              <a onClick={() => Logout()}>Log out</a>
            </Link>
            <Link href="/admin">
              <a>My Page</a>
            </Link>
            <Link href="/addhotel">Add a Hotel</Link>
            <input className="search" placeholder="Search..."></input>
          </div>
        </div>
      </div>
    </div>
  );
}
