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
            <Link href="/login">
              <a href="/login">Login</a>
            </Link>
            <Link href="https://www.instagram.com/">
              <a href="https://www.instagram.com/" target="_blank">
                <InstagramIcon />
              </a>
            </Link>
            <Link href="https://twitter.com/">
              <a href="https://twitter.com/" target="_blank">
                <TwitterIcon />
              </a>
            </Link>
            <Link href="https://www.facebook.com/">
              <a href="https://www.facebook.com/" target="_blank">
                <FacebookIcon />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
