import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
import ScbpCard from "../components/scbp_card/ScbpCard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-bg-color">
      <Head>
        <title>build-self-confidence</title>
      </Head>
      <NavBar />
      <div className="flex">
        <ScbpCard />
      </div>
      <Footer />
    </div>
  );
}
