import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Nav/Navbar";

const montserrat = Montserrat({
  variable: "--Montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: "100",
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <Layout>
      <Navbar />
      <main className={`bg-purple3 text-[white] ${montserrat.className}`}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
