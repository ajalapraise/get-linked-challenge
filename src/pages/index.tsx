import Head from "next/head";
import Image from "next/image";

import Herosection from "@/components/Heresection/Herosection";
import { Criteria, FAQ, Intro, Partners, Prizes, Rules, Timeline } from "@/components/Landingpage/LandingPage";

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
        <Partners />
      </main>
    </div>
  );
}
