import { ReactElement, useState } from "react";
import { Box, Grid } from "@chakra-ui/core";
import Wrapper from "@/components/Wrapper";
import { HeadlineAuto, Headline5 } from "@/components/core/Text";
import { LocationHashEnum, styles } from "@/src/constants";
import SponsorItem from "@/components/SponsorItem";

const imgPath = "/images";

const toGridTemplate = (rows: string[]) =>
  rows.map((row) => `"${row}"`).join(" ");

const sponsorsWideGrid = toGridTemplate([
  `deloitte deloitte innovapost innovapost solace solace`,
  `cdw cdw kanatanorthbia kanatanorthbia ssc ssc`,
  // `. . sunlife sunlife . .`,
  `adga adga ciena ciena morgan morgan`,
  `. . balsamiq balsamiq . .`,
  `voiceflow voiceflow onepassword onepassword wolfram wolfram`,
]);

const sponsorsThinGrid = toGridTemplate([
  `deloitte deloitte deloitte deloitte deloitte deloitte`,
  `innovapost innovapost innovapost innovapost innovapost innovapost`,
  `solace solace solace solace solace solace`,
  `cdw cdw cdw cdw cdw cdw`,
  `kanatanorthbia kanatanorthbia kanatanorthbia kanatanorthbia kanatanorthbia kanatanorthbia`,
  `ssc ssc ssc ssc ssc ssc`,
  // `sunlife sunlife sunlife sunlife sunlife sunlife`,
  `adga adga . . ciena ciena`,
  `. . morgan morgan . .`,
  `. . balsamiq balsamiq . .`,
  `voiceflow voiceflow . . onepassword onepassword`,
  `. . wolfram wolfram . .`,
]);

const communityWideGrid = toGridTemplate([`mlh github uottawa decode`]);

const communityThinGrid = toGridTemplate([`mlh github uottawa`, `. decode .`]);

enum SponsorSectionEnum {
  NONE,
  MONETARY,
  IN_KIND,
}

function SponsorShowcase(): ReactElement {
  const [hovered, setHovered] = useState("none");
  const [activeSection, setActiveSection] = useState(SponsorSectionEnum.NONE);

  const shouldFadeMonetary = (sponsorName: string) =>
    sponsorName !== hovered &&
    hovered !== "none" &&
    activeSection === SponsorSectionEnum.MONETARY;

  const shouldFadeInKind = (sponsorName: string) =>
    sponsorName !== hovered &&
    hovered !== "none" &&
    activeSection === SponsorSectionEnum.IN_KIND;

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
          onMouseEnter={() => setActiveSection(SponsorSectionEnum.MONETARY)}
          onMouseLeave={() => setActiveSection(SponsorSectionEnum.NONE)}
        >
          {/* Gold: Deloitte */}
          <SponsorItem
            imgUrl={`${imgPath}/deloitte.png`}
            sponsorUrl="https://www2.deloitte.com/ca/en.html"
            gridArea="deloitte"
            width={["50%", "50%", "70%"]}
            faded={shouldFadeMonetary("deloitte")}
            onMouseEnter={() => setHovered("deloitte")}
            onMouseLeave={() => setHovered("none")}
          />
          {/* Gold: Innovapost */}
          <SponsorItem
            imgUrl={`${imgPath}/innovapost.png`}
            sponsorUrl="https://innovapost.com"
            gridArea="innovapost"
            width={["70%", "70%", "90%"]}
            faded={shouldFadeMonetary("innovapost")}
            onMouseEnter={() => setHovered("innovapost")}
            onMouseLeave={() => setHovered("none")}
          />
          {/* Gold: Solace */}
          <SponsorItem
            imgUrl={`${imgPath}/solace.png`}
            sponsorUrl="https://solace.com"
            gridArea="solace"
            width={["50%", "50%", "70%"]}
            faded={shouldFadeMonetary("solace")}
            onMouseEnter={() => setHovered("solace")}
            onMouseLeave={() => setHovered("none")}
          />
          {/* Gold: CDW */}
          <SponsorItem
            imgUrl={`${imgPath}/cdw.png`}
            sponsorUrl="https://www.cdw.com/"
            gridArea="cdw"
            width={["40%", "40%", "55%"]}
            faded={shouldFadeMonetary("cdw")}
            onMouseEnter={() => setHovered("cdw")}
            onMouseLeave={() => setHovered("none")}
          />
          {/* Gold: Kanata North */}
          <SponsorItem
            imgUrl={`${imgPath}/kanatanorthbia.png`}
            sponsorUrl="https://www.kanatanorthba.com"
            gridArea="kanatanorthbia"
            width={["40%", "40%", "45%"]}
            faded={shouldFadeMonetary("kanatanorthbia")}
            onMouseEnter={() => setHovered("kanatanorthbia")}
            onMouseLeave={() => setHovered("none")}
          />
          {/* Gold: Shared Services Canada */}
          <SponsorItem
            imgUrl={`${imgPath}/shared-services-canada.png`}
            sponsorUrl="https://www.canada.ca/en/shared-services.html"
            gridArea="ssc"
            width={["60%", "60%", "75%"]}
            faded={shouldFadeMonetary("ssc")}
            onMouseEnter={() => setHovered("ssc")}
            onMouseLeave={() => setHovered("none")}
          />
          {/* Gold: Sun Life */}
          {/* <SponsorItem
            imgUrl={`${imgPath}/sunlife.png`}
            sponsorUrl="https://www.sunlife.ca/en/"
            gridArea="sunlife"
            width={["60%", "60%", "75%"]}
            faded={shouldFadeMonetary("sunlife")}
            onMouseEnter={() => setHovered("sunlife")}
            onMouseLeave={() => setHovered("none")}
          /> */}
          {/* Silver: ADGA */}
          <SponsorItem
            imgUrl={`${imgPath}/adga.png`}
            sponsorUrl="https://www.adga.ca"
            gridArea="adga"
            width={["80%", "80%", "45%"]}
            faded={shouldFadeMonetary("adga")}
            onMouseEnter={() => setHovered("adga")}
            onMouseLeave={() => setHovered("none")}
          />
          {/* Silver: Ciena */}
          <SponsorItem
            imgUrl={`${imgPath}/ciena.svg`}
            sponsorUrl="https://www.ciena.ca"
            gridArea="ciena"
            width={["80%", "80%", "80%"]}
            faded={shouldFadeMonetary("ciena")}
            onMouseEnter={() => setHovered("ciena")}
            onMouseLeave={() => setHovered("none")}
          />
          {/* Silver: Morgan Stanley */}
          <SponsorItem
            imgUrl={`${imgPath}/morgan-stanley.png`}
            sponsorUrl="https://www.morganstanley.com"
            gridArea="morgan"
            width={["100%", "100%", "50%"]}
            faded={shouldFadeMonetary("morgan")}
            onMouseEnter={() => setHovered("morgan")}
            onMouseLeave={() => setHovered("none")}
          />
          {/* Bronze: Balsamiq */}
          <SponsorItem
            imgUrl={`${imgPath}/balsamiq.png`}
            sponsorUrl="https://balsamiq.com"
            gridArea="balsamiq"
            width={["60%", "60%", "30%"]}
            faded={shouldFadeMonetary("balsamiq")}
            onMouseEnter={() => setHovered("balsamiq")}
            onMouseLeave={() => setHovered("none")}
          />
          {/* In-kind: Voiceflow */}
          <SponsorItem
            imgUrl={`${imgPath}/voiceflow.png`}
            sponsorUrl="https://www.voiceflow.com"
            gridArea="voiceflow"
            width={["60%", "50%", "30%"]}
            faded={shouldFadeMonetary("voiceflow")}
            onMouseEnter={() => setHovered("voiceflow")}
            onMouseLeave={() => setHovered("none")}
          />
          {/* In-kind: 1Password */}
          <SponsorItem
            imgUrl={`${imgPath}/onepassword.png`}
            sponsorUrl="https://1password.com"
            gridArea="onepassword"
            width={["75%", "65%", "45%"]}
            faded={shouldFadeMonetary("onepassword")}
            onMouseEnter={() => setHovered("onepassword")}
            onMouseLeave={() => setHovered("none")}
          />
          {/* In-kind: Wolfram */}
          <SponsorItem
            imgUrl={`${imgPath}/wolfram.png`}
            sponsorUrl="https://www.wolfram.com/"
            gridArea="wolfram"
            width={["75%", "65%", "45%"]}
            faded={shouldFadeMonetary("wolfram")}
            onMouseEnter={() => setHovered("wolfram")}
            onMouseLeave={() => setHovered("none")}
          />
        </Grid>
        <Headline5 marginTop="0.5in">Community Partners</Headline5>
        <Grid
          marginTop="0.5in"
          width="100%"
          gridTemplateColumns={[
            "repeat(3, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gridTemplateAreas={[
            communityThinGrid,
            communityThinGrid,
            communityWideGrid,
          ]}
          justifyItems="center"
          alignItems="center"
          onMouseEnter={() => setActiveSection(SponsorSectionEnum.IN_KIND)}
          onMouseLeave={() => setActiveSection(SponsorSectionEnum.NONE)}
        >
          {/* MLH */}
          <SponsorItem
            imgUrl={`${imgPath}/mlh.png`}
            sponsorUrl="https://mlh.io/"
            gridArea="mlh"
            width={["50%", "40%", "24%"]}
            faded={shouldFadeInKind("mlh")}
            onMouseEnter={() => setHovered("mlh")}
            onMouseLeave={() => setHovered("none")}
          />
          {/* GitHub */}
          <SponsorItem
            imgUrl={`${imgPath}/github.png`}
            sponsorUrl="https://github.com/"
            gridArea="github"
            width={["60%", "50%", "30%"]}
            faded={shouldFadeInKind("github")}
            onMouseEnter={() => setHovered("github")}
            onMouseLeave={() => setHovered("none")}
          />
          {/* uOttawa */}
          <SponsorItem
            imgUrl={`${imgPath}/uottawa.png`}
            sponsorUrl="https://www.uottawa.ca/"
            gridArea="uottawa"
            width={["70%", "60%", "35%"]}
            faded={shouldFadeInKind("uottawa")}
            onMouseEnter={() => setHovered("uottawa")}
            onMouseLeave={() => setHovered("none")}
          />
          {/* Hack Decode */}
          <SponsorItem
            imgUrl={`${imgPath}/decode.png`}
            sponsorUrl="https://www.hackdecode.io/"
            gridArea="decode"
            width={["90%", "70%", "40%"]}
            faded={shouldFadeInKind("decode")}
            onMouseEnter={() => setHovered("decode")}
            onMouseLeave={() => setHovered("none")}
          />
        </Grid>
      </Wrapper>
    </Box>
  );
}

export default SponsorShowcase;
