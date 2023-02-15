import type { AppProps } from "next/app";
// import style from "@style/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
