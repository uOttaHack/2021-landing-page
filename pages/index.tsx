import { ReactElement } from "react";
import Head from "next/head";

import NavBar from "@/components/NavBar";
import Hero from "@/components/sections/Hero";
import TeamMessage from "@/components/sections/TeamMessage";
import About from "@/components/sections/About";
import HackingTracks from "@/components/sections/HackingTracks";
import SponsorEvent from "@/components/sections/SponsorEvent";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

function IndexPage(): ReactElement {
  return (
    <div>
      <Head>
        <title>uOttaHack 4</title>
        <meta name="description" content="" />
      </Head>

      <main>
        <NavBar />
        <Hero />
        <TeamMessage />
        <About />
        <HackingTracks />
        <SponsorEvent />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}

export default IndexPage;
