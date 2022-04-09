import Head from "next/head";
import Banner from "../src/component/Banner";
import Footer from "../src/component/Footer";
import Header from "../src/component/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Math &amp; Code</title>
        <meta name="description" content="Math &amp; Code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      <Banner/>
      {/* <Footer /> */}
    </div>
  );
}
