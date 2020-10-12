import { ReactElement } from "react";
import { Box, Flex, Grid, Image } from "@chakra-ui/core";
import Wrapper from "@/components/Wrapper";
import { BodyAuto, HeadlineAuto } from "@/components/core/Text";

const toInches = (sizes: number[]) => sizes.map((size) => `${size}in`);
const bubbleGridWidths = [2.5, 4, 3, 3.5, 4.5];
const bubbleGridHeights = bubbleGridWidths.map((width) => (width * 8) / 7);

function About(): ReactElement {
  return (
    <>
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
              Hosted at the University of Ottawa, uOttaHack is Ottawa&apos;s
              largest hackathon and this year will be its most exciting
              iteration yet! To commemorate this special milestone, uOttaHack 3
              is expanding the hacker experience with new initiatives to create
              an unforgettable weekend for its hackers.
            </BodyAuto>
            <br />
            <BodyAuto>
              Now a 36 hour long hackathon, uOttaHack 3 will welcome over 400
              students on February 7th-9th from a diverse set of backgrounds to
              collaborate on projects, learn at workshops, and build out their
              innovative ideas.
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
                src="https://scontent.fxds1-1.fna.fbcdn.net/v/t1.0-0/p640x640/89151459_910475549407542_4149718717594337280_o.jpg?_nc_cat=104&_nc_sid=e007fa&_nc_ohc=Caw1Ld8QwbwAX9RFubd&_nc_ht=scontent.fxds1-1.fna&tp=6&oh=7dfb708f206c2051863b6d29199e6525&oe=5FAB42DB"
              />
              <Image
                gridArea="b"
                height="800%"
                maxWidth="800%"
                rounded="full"
                objectFit="cover"
                src="https://scontent.fxds1-1.fna.fbcdn.net/v/t1.0-0/p640x640/89097625_910470802741350_7505724141698285568_o.jpg?_nc_cat=106&_nc_sid=e007fa&_nc_ohc=mg4aim3P_HgAX_xkx4g&_nc_ht=scontent.fxds1-1.fna&tp=6&oh=7e336a898095031e272aa2dce4f17239&oe=5FA91DF1"
              />
              <Image
                gridArea="c"
                height="650%"
                maxWidth="650%"
                rounded="full"
                objectFit="cover"
                src="https://scontent.fxds1-1.fna.fbcdn.net/v/t1.0-0/p640x640/89036407_910478866073877_2735373870918795264_o.jpg?_nc_cat=100&_nc_sid=e007fa&_nc_ohc=Ejp1B2ktLiUAX-T9VoF&_nc_ht=scontent.fxds1-1.fna&tp=6&oh=2b5116ccf3ccc691718c09f0f42772d4&oe=5FA9A22D"
              />
              <Image
                gridArea="d"
                height="450%"
                maxWidth="450%"
                rounded="full"
                objectFit="cover"
                src="https://scontent.fxds1-1.fna.fbcdn.net/v/t1.0-0/p640x640/89069297_910489586072805_8413874236040413184_o.jpg?_nc_cat=102&_nc_sid=e007fa&_nc_ohc=DS-8EqTNNRsAX9QPXL0&_nc_ht=scontent.fxds1-1.fna&tp=6&oh=f5fae5db7cd6bc8969e45567eec3a5f9&oe=5FAA605C"
              />
            </Grid>
          </Box>
        </Flex>
      </Wrapper>
    </>
  );
}

export default About;
