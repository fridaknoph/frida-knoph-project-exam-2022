import { parseCookies, setCookie, destroyCookie } from "nookies";
import useEffect from "react";
import useRouter from "next/router";

export default function notLoggedIn() {
  const cookies = parseCookies();
  const router = useRouter();

  useEffect(() => {
    console.log({ cookies });

    setCookie(null, "jwt", cookies.jwt, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });

    if (!cookies.jwt) {
      window.alert("You are not logged in.");
      router.push("/login");
    }
  }, []);
}
