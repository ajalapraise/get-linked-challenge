import Head from "next/head";
import Image from "next/image";

import Herosection from "@/components/Heresection/Herosection";
import { Criteria, FAQ, Intro, MdTimeline, Partners, Privacy, Prizes, Rules, SmTimeline } from "@/components/Landingpage/LandingPage";

const Home = () => {
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
        <SmTimeline />
        <MdTimeline />
        <Prizes />
        <Partners />
        <Privacy />
      </main>
    </div>
  );
}

export default Home
