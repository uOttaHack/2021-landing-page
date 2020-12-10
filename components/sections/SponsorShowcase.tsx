import { ReactElement } from "react";
import styled from "@emotion/styled";
import { Box, Grid, Image, Link } from "@chakra-ui/core";
import Wrapper from "@/components/Wrapper";
import { HeadlineAuto, Headline5 } from "../core/Text";
import { LocationHashEnum, styles } from "@/src/constants";

const imgPath = "/images";

const SponsorImage = styled(Image)`
  margin: 0 auto;
  user-select: none;
`;

const SponsorLink = styled(Link)`
  margin-top: 32px;
  margin-bottom: 32px;
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
          <SponsorLink
            href="https://www2.deloitte.com/ca/en.html"
            gridArea="deloitte"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SponsorImage
              src={`${imgPath}/deloitte.png`}
              width={["50%", "50%", "70%"]}
            />
          </SponsorLink>
          <SponsorLink
            href="https://innovapost.com"
            gridArea="innovapost"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SponsorImage
              src={`${imgPath}/innovapost.png`}
              width={["70%", "70%", "90%"]}
            />
          </SponsorLink>
          <SponsorLink
            href="https://solace.com"
            gridArea="solace"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SponsorImage
              src={`${imgPath}/solace.png`}
              width={["50%", "50%", "70%"]}
            />
          </SponsorLink>
          <SponsorLink
            href="https://www.adga.ca/"
            gridArea="adga"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SponsorImage
              src={`${imgPath}/adga.png`}
              width={["80%", "80%", "45%"]}
            />
          </SponsorLink>
          <SponsorLink
            href="https://www.ciena.ca/"
            gridArea="ciena"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SponsorImage
              src={`${imgPath}/ciena.svg`}
              width={["80%", "80%", "80%"]}
            />
          </SponsorLink>
          <SponsorLink
            href="https://www.ciena.ca/"
            gridArea="morgan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SponsorImage
              src={`${imgPath}/morgan-stanley.png`}
              width={["100%", "100%", "50%"]}
            />
          </SponsorLink>

          <SponsorLink
            href="https://balsamiq.com/"
            gridArea="balsamiq"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SponsorImage
              src={`${imgPath}/balsamiq.png`}
              width={["60%", "50%", "30%"]}
            />
          </SponsorLink>

          <SponsorLink
            href="https://www.kanatanorthba.com/"
            gridArea="kanatanorthbia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SponsorImage
              src={`${imgPath}/kanatanorthbia.png`}
              width={["60%", "50%", "30%"]}
            />
          </SponsorLink>

          <SponsorLink
            href="https://www.voiceflow.com/"
            gridArea="voiceflow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SponsorImage
              src={`${imgPath}/voiceflow.png`}
              width={["60%", "50%", "30%"]}
            />
          </SponsorLink>

          <SponsorLink
            href="https://1password.com/"
            gridArea="onepassword"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SponsorImage
              src={`${imgPath}/onepassword.png`}
              width={["75%", "65%", "45%"]}
            />
          </SponsorLink>
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
