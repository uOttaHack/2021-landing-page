import { ReactElement } from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/core";

import NavBar from "@/components/NavBar";
import Hero from "@/components/sections/Hero";
import TeamMessage from "@/components/sections/TeamMessage";
import About from "@/components/sections/About";
import SponsorShowcase from "@/components/sections/SponsorShowcase";
import SponsorEvent from "@/components/sections/SponsorEvent";
import Challenges from "@/components/sections/Challenges";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

function IndexPage(): ReactElement {
  return (
    <div>
      <Head>
        <title>uOttaHack 4</title>
        <meta
          name="description"
          content="uOttaHack is uOttawa's largest hackathon and this year will be its more exciting iteration yet! To commemorate this special milestone, uOttaHack 4 is expanding the hacker experience with new initiatives to create an unforgettable weekend for its hackers, VIRTUALLY!"
        />
      </Head>

      <main>
        <Box overflow="hidden">
          <NavBar />
          <Hero />
          <TeamMessage />
          <About />
          <SponsorEvent />
          <SponsorShowcase />
          <Challenges />
          <FAQ />
          <Footer />
        </Box>
      </main>

      <style jsx>{`
        main {
          background-image: url("/images/footer.svg");
          background-size: contain;
          background-repeat: no-repeat;
          background-position: bottom;
        }
      `}</style>

      <style jsx global>{`
        @font-face {
          font-family: "Inter";
          font-weight: normal;
          font-style: normal;
          src: url("/fonts/inter/Inter-Regular.woff2") format("woff2"),
            url("/fonts/inter/Inter-Regular.woff") format("woff"),
            url("/fonts/inter/Inter-Regular.otf") format("otf"),
            url("/fonts/inter/Inter-Regular.ttf") format("truetype");
        }

        @font-face {
          font-family: "Inter";
          font-weight: 500;
          font-style: normal;
          src: url("/fonts/inter/Inter-Medium.woff2") format("woff2"),
            url("/fonts/inter/Inter-Medium.woff") format("woff"),
            url("/fonts/inter/Inter-Medium.otf") format("otf"),
            url("/fonts/inter/Inter-Medium.ttf") format("truetype");
        }

        @font-face {
          font-family: "Inter";
          font-weight: bold;
          font-style: normal;
          src: url("/fonts/inter/Inter-Bold.woff2") format("woff2"),
            url("/fonts/inter/Inter-Bold.woff") format("woff"),
            url("/fonts/inter/Inter-Bold.otf") format("otf"),
            url("/fonts/inter/Inter-Bold.ttf") format("truetype");
        }

        @font-face {
          font-family: "Gilroy";
          font-weight: 800;
          font-style: normal;
          src: url("/fonts/gilroy/Gilroy-ExtraBold.otf") format("otf"),
            url("/fonts/gilroy/Gilroy-ExtraBold.ttf") format("truetype");
        }

        @font-face {
          font-family: "Harabara";
          font-style: normal;
          src: url("/fonts/harabara/Harabara.ttf") format("truetype");
        }

        body {
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
}

export default IndexPage;
