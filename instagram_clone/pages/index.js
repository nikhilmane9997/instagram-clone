import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Feeds from "../components/Feeds";
import Footer from "../components/Footer";
import Model from "../components/Model";

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Insta-Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Model />
      <Header />
      <Feeds />
      <Footer />
    </div>
  );
}
