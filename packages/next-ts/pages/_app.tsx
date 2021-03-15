import { NextPage } from "next";
import "../styles/globals.css";

const MyApp = ({
  Component,
  pageProps,
}: {
  Component: NextPage;
  pageProps: any;
}) => {
  return <Component {...pageProps} />;
};

export default MyApp;
