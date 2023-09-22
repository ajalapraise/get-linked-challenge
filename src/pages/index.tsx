import Head from "next/head";
import Image from "next/image";

import Navbar from "@/components/layout/Nav/Navbar";
import Herosection from "@/components/Heresection/Herosection";
import { Criteria, FAQ, Intro, Prizes, Rules, Timeline } from "@/components/Landingpage/LandingPage";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>getstarted | HomePage </title>
      </Head>

      <main className={`min-h-screen `}>
        <Herosection />
        <Intro />
        <Rules />
        <Criteria />
        <FAQ />
        <Timeline />
        <Prizes />
      </main>
    </div>
  );
}
