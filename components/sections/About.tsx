import { ReactElement } from "react";
import { Box, Flex, Grid, Image } from "@chakra-ui/core";
import Wrapper from "@/components/Wrapper";
import { BodyAuto, HeadlineAuto } from "@/components/core/Text";
import { LocationHashEnum } from "@/src/constants";

const toInches = (sizes: number[]) => sizes.map((size) => `${size}in`);
const bubbleGridWidths = [2.5, 4, 3, 3.5, 4.5];
const bubbleGridHeights = bubbleGridWidths.map((width) => (width * 8) / 7);

function About(): ReactElement {
  return (
    <div id={LocationHashEnum.About}>
      <Wrapper>
        <Flex
          marginTop="8em"
          justifyContent="space-between"
          alignItems="center"
          flexDirection={["column-reverse", "column-reverse", "row"]}
        >
          <Box
            width={["100%", "100%", "50%"]}
            marginRight={[0, 0, "0.5in"]}
            marginTop={["5em", "5em", 0]}
          >
            <HeadlineAuto marginBottom="16px">
              Ottawa&apos;s largest
              <br />
              hackathon has
              <br />
              turned 4!
            </HeadlineAuto>
            <BodyAuto>
              uOttaHack is uOttawa&apos;s largest hackathon and this year will
              be its more exciting iteration yet! To commemorate this special
              milestone, uOttaHack 4 is expanding the hacker experience with new
              initiatives to create an unforgettable weekend for its hackers,
              VIRTUALLY!
            </BodyAuto>
            <br />
            <BodyAuto>
              COVID-19 has brought the greatest medical challenge that world has
              seen in our generation. For uOttaHack 4, we are bringing hackers
              together to help build solutions for issues our local community is
              facing due to COVID-19. After reaching out to multiple local
              businesses such as hospitals, nursing homes and hotels, we have
              created challenges that will help the city of Ottawa recover.
              Details to be announced!
            </BodyAuto>
          </Box>
          <Box>
            <Grid
              width={toInches(bubbleGridWidths)}
              height={toInches(bubbleGridHeights)}
              justifyItems="center"
              alignItems="center"
              gridTemplateColumns="repeat(14, 1fr)"
              gridTemplateRows="repeat(16, 1fr)"
              gridTemplateAreas={[
                `. . . . . . . . . . . . . .`,
                `. . . . . . . . . . . . . .`,
                `. . . a . . . . . . . . . .`,
                `. . . . . . . . . . . . . .`,
                `. . . . . . . . . . c . . .`,
                `. . . . . . . . . . . . . .`,
                `. . . . . . . . . . . . . .`,
                `. . . . . . . . . . . . . .`,
                `. . . . . . . . . . . . . .`,
                `. . . . . . . . . . . . . .`,
                `. . . . b . . . . . . . . .`,
                `. . . . . . . . . . . . . .`,
                `. . . . . . . . . . . . . .`,
                `. . . . . . . . . . . d . .`,
                `. . . . . . . . . . . . . .`,
                `. . . . . . . . . . . . . .`,
              ]
                .map((row) => `"${row}"`)
                .join(" ")}
            >
              <Image
                gridArea="a"
                height="500%"
                maxWidth="500%"
                rounded="full"
                objectFit="cover"
                src="/images/2020a.jpg"
              />
              <Image
                gridArea="b"
                height="800%"
                maxWidth="800%"
                rounded="full"
                objectFit="cover"
                src="/images/2020b.jpg"
              />
              <Image
                gridArea="c"
                height="650%"
                maxWidth="650%"
                rounded="full"
                objectFit="cover"
                src="/images/2020c.jpg"
              />
              <Image
                gridArea="d"
                height="450%"
                maxWidth="450%"
                rounded="full"
                objectFit="cover"
                src="/images/2020d.jpg"
              />
            </Grid>
          </Box>
        </Flex>
      </Wrapper>
    </div>
  );
}

export default About;
