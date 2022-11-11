import Head from "next/head";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Footer() {
  return (
    <div>
      <div className="nav__row__footer">
        <div className="nav__links__row">
          <div className="nav__links">
            <Link href="/">
              <a className="nav__logo">Holidaze</a>
            </Link>
            <Link href="/hotels">
              <a>Our Hotels</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
            <Link href="/visitbergen">
              <a>Visit Bergen</a>
            </Link>
            <Link href="/login">
              <a>Login</a>
            </Link>
            <Link href="https://www.instagram.com/">
              <a target="_blank">
                <InstagramIcon />
              </a>
            </Link>
            <Link href="https://twitter.com/">
              <a target="_blank">
                <TwitterIcon />
              </a>
            </Link>
            <Link href="https://www.facebook.com/">
              <a target="_blank">
                <FacebookIcon />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
