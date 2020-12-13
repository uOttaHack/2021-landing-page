import { ReactElement, useState } from "react";
import styled from "@emotion/styled";
import { Box, Grid, Image } from "@chakra-ui/core";
import Wrapper from "@/components/Wrapper";
import { HeadlineAuto, Headline5 } from "../core/Text";
import { LocationHashEnum, styles } from "@/src/constants";
import SponsorItem from "@/components/SponsorItem";

const imgPath = "/images";

const SponsorImage = styled(Image)`
  margin: 0 auto;
  user-select: none;
`;

const toGridTemplate = (rows: string[]) =>
  rows.map((row) => `"${row}"`).join(" ");

const sponsorsWideGrid = toGridTemplate([
  `deloitte deloitte innovapost innovapost solace solace`,
  `adga adga ciena ciena morgan morgan`,
  `. balsamiq balsamiq kanatanorthbia kanatanorthbia .`,
  `. voiceflow voiceflow onepassword onepassword .`,
]);

const sponsorsThinGrid = toGridTemplate([
  `deloitte deloitte deloitte deloitte deloitte deloitte`,
  `innovapost innovapost innovapost innovapost innovapost innovapost`,
  `solace solace solace solace solace solace`,
  `adga adga . . ciena ciena`,
  `. . morgan morgan . .`,
  `balsamiq balsamiq . . kanatanorthbia kanatanorthbia`,
  `voiceflow voiceflow . . onepassword onepassword`,
]);

const communityGrid = toGridTemplate([`mlh github uottawa`]);

function SponsorShowcase(): ReactElement {
  const [hovered, setHovered] = useState("none");

  const shouldFade = (sponsorName: string) =>
    sponsorName !== hovered && hovered !== "none";

  return (
    <Box
      id={LocationHashEnum.Sponsors}
      marginTop={[styles.sectionTopMargin, styles.sectionTopMargin, "2in"]}
    >
      <Wrapper>
        <HeadlineAuto>Sponsors</HeadlineAuto>
        <Grid
          marginTop="0.5in"
          width="100%"
          gridTemplateColumns="repeat(6, 1fr)"
          gridTemplateAreas={[
            sponsorsThinGrid,
            sponsorsThinGrid,
            sponsorsWideGrid,
          ]}
          justifyItems="center"
          alignItems="center"
        >
          {/* Deloitte */}
          <SponsorItem
            imgUrl={`${imgPath}/deloitte.png`}
            sponsorUrl="https://www2.deloitte.com/ca/en.html"
            gridArea="deloitte"
            width={["50%", "50%", "70%"]}
            faded={shouldFade("deloitte")}
            onMouseEnter={() => setHovered("deloitte")}
            onMouseLeave={() => setHovered("none")}
          />
          {/* Innovapost */}
          <SponsorItem
            imgUrl={`${imgPath}/innovapost.png`}
            sponsorUrl="https://innovapost.com"
            gridArea="innovapost"
            width={["70%", "70%", "90%"]}
            faded={shouldFade("innovapost")}
            onMouseEnter={() => setHovered("innovapost")}
            onMouseLeave={() => setHovered("none")}
          />
          {/* Solace */}
          <SponsorItem
            imgUrl={`${imgPath}/solace.png`}
            sponsorUrl="https://solace.com"
            gridArea="solace"
            width={["50%", "50%", "70%"]}
            faded={shouldFade("solace")}
            onMouseEnter={() => setHovered("solace")}
            onMouseLeave={() => setHovered("none")}
          />
          {/* ADGA */}
          <SponsorItem
            imgUrl={`${imgPath}/adga.png`}
            sponsorUrl="https://www.adga.ca"
            gridArea="adga"
            width={["80%", "80%", "45%"]}
            faded={shouldFade("adga")}
            onMouseEnter={() => setHovered("adga")}
            onMouseLeave={() => setHovered("none")}
          />
          {/* Ciena */}
          <SponsorItem
            imgUrl={`${imgPath}/ciena.svg`}
            sponsorUrl="https://www.ciena.ca"
            gridArea="ciena"
            width={["80%", "80%", "80%"]}
            faded={shouldFade("ciena")}
            onMouseEnter={() => setHovered("ciena")}
            onMouseLeave={() => setHovered("none")}
          />
          {/* Morgan Stanley */}
          <SponsorItem
            imgUrl={`${imgPath}/morgan-stanley.png`}
            sponsorUrl="https://www.morganstanley.com"
            gridArea="morgan"
            width={["100%", "100%", "50%"]}
            faded={shouldFade("morgan")}
            onMouseEnter={() => setHovered("morgan")}
            onMouseLeave={() => setHovered("none")}
          />
          {/* Balsamiq */}
          <SponsorItem
            imgUrl={`${imgPath}/balsamiq.png`}
            sponsorUrl="https://balsamiq.com"
            gridArea="balsamiq"
            width={["60%", "50%", "30%"]}
            faded={shouldFade("balsamiq")}
            onMouseEnter={() => setHovered("balsamiq")}
            onMouseLeave={() => setHovered("none")}
          />
          {/* Kanata North */}
          <SponsorItem
            imgUrl={`${imgPath}/kanatanorthbia.png`}
            sponsorUrl="https://www.kanatanorthba.com"
            gridArea="kanatanorthbia"
            width={["60%", "50%", "30%"]}
            faded={shouldFade("kanatanorthbia")}
            onMouseEnter={() => setHovered("kanatanorthbia")}
            onMouseLeave={() => setHovered("none")}
          />
          {/* Voiceflow */}
          <SponsorItem
            imgUrl={`${imgPath}/voiceflow.png`}
            sponsorUrl="https://www.voiceflow.com"
            gridArea="voiceflow"
            width={["60%", "50%", "30%"]}
            faded={shouldFade("voiceflow")}
            onMouseEnter={() => setHovered("voiceflow")}
            onMouseLeave={() => setHovered("none")}
          />
          {/* Voiceflow */}
          <SponsorItem
            imgUrl={`${imgPath}/onepassword.png`}
            sponsorUrl="https://1password.com"
            gridArea="onepassword"
            width={["75%", "65%", "45%"]}
            faded={shouldFade("onepassword")}
            onMouseEnter={() => setHovered("onepassword")}
            onMouseLeave={() => setHovered("none")}
          />
        </Grid>
        <Headline5 marginTop="0.5in">Community Partners</Headline5>
        <Grid
          marginTop="0.5in"
          width="100%"
          gridTemplateColumns="repeat(3, 1fr)"
          gridTemplateAreas={communityGrid}
          justifyItems="center"
          alignItems="center"
        >
          <SponsorImage
            src={`${imgPath}/mlh.png`}
            gridArea="mlh"
            width={["50%", "40%", "24%"]}
          />
          <SponsorImage
            src={`${imgPath}/github.png`}
            gridArea="github"
            width={["60%", "50%", "30%"]}
          />
          <SponsorImage
            src={`${imgPath}/uottawa.png`}
            gridArea="uottawa"
            width={["70%", "60%", "35%"]}
          />
        </Grid>
      </Wrapper>
    </Box>
  );
}

export default SponsorShowcase;
