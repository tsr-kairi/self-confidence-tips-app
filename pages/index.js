import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
import ScbpCard from "../components/scbp_card/ScbpCard";
import { FaCheckCircle } from "react-icons/fa";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-bg-color">
      <Head>
        <title>build-self-confidence</title>
      </Head>
      <NavBar />
      <div className="bg-[#e4ecdc] py-2 flex justify-center">
        <a
          href="#"
          className="flex items-center text-[#417505] md:text-sm text-[9px] md:gap-2 gap-1"
        >
          <FaCheckCircle className="md:text-lg text-sm" />
          scbp is where trusted research and expert knowledge come together. Learn why
          people <b>trust scbp</b>
        </a>
      </div>
      <ScbpCard />
      <Footer />
    </div>
  );
}
