import { ReactElement } from "react";
import { Box, Flex, Grid, Image } from "@chakra-ui/core";
import Wrapper from "@/components/Wrapper";
import { BodyAuto, HeadlineAuto, Headline  } from "@/components/core/Text";
import theme from "@/src/theme";

const toInches = (sizes: number[]) => sizes.map((size) => `${size}in`);
const bubbleGridWidths = [2.5, 4, 3, 3.5, 4.5];
const bubbleGridHeights = bubbleGridWidths.map((width) => (width * 8) / 7);

const tempGreenImg =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUWlHxHwAEWQI7NLZUaQAAAABJRU5ErkJggg==";

function HackingTracks(): ReactElement {
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
              Hacking Tracks
            </HeadlineAuto>
            <BodyAuto>
              In uOttaHack 3, we introduced Hacking Tracks, specific categories for hackers to build their projects 
              around that addresses problems in the real world. Teams have the creative freedom while also collectively 
              working on a real world challenge.
            </BodyAuto>
            <br />
            <BodyAuto>
              Check out submissions from last year&apos;s tracks by clicking on the bubbles!
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
                `. . . . . . . . . . . . . .`,
                `. . . . . . . . . . a . . .`,
                `. . . . . . . . . . . . . .`,
                `. . . . . . . . . . . . . .`,
                `. . . . . . . . . . . . . .`,
                `. . . . . . . . . . . . . .`,
                `. . . b . . . . . . . . . .`,
                `. . . . . . . . . . . . . .`,
                `. . . . . . . . . . . . . .`,
                `. . . . . . . . . . . . . .`,
                `. . . . . . . . . . . . . .`,
                `. . . . . . . . . . c . . .`,
                `. . . . . . . . . . . . . .`,
                `. . . . . . . . . . . . . .`,
              ]
                .map((row) => `"${row}"`)
                .join(" ")}
            >
              <Flex
                gridArea="b"
                height="700%"
                width="700%" 
                position="relative"
                alignItems="center"
                justifyContent="center"
              >
                <Headline position="absolute" fontSize={[12.8, 12.8, 16, 20]} color={theme.colors.brand.background + " !important"}>FinTech</Headline>
                <Image
                  gridArea="b"
                  height="100%"
                  maxWidth="100%"
                  rounded="full"
                  src={tempGreenImg}
                />
              </Flex>
              <Flex
                gridArea="a"
                height="600%"
                width="600%" 
                position="relative"
                alignItems="center"
                justifyContent="center"
              >
                <Headline position="absolute" fontSize={[12.8, 12.8, 12.8, 16]} color={theme.colors.brand.background + " !important"}>HealthTech</Headline>
                <Image
                  gridArea="a"
                  height="100%"
                  maxWidth="100%"
                  rounded="full"
                  src={tempGreenImg}
                />

              </Flex>
              <Flex
                gridArea="c"
                height="500%"
                width="500%" 
                position="relative"
                alignItems="center"
                justifyContent="center"
              >
              <Headline position="absolute" fontSize={[10.25, 10.25, 10.25, 12.8]} color={theme.colors.brand.background + " !important"}>Smart Delivery</Headline>
                <Image
                  gridArea="c"
                  height="100%"
                  maxWidth="100%"
                  rounded="full"
                  src={tempGreenImg}
                />
              </Flex>
            </Grid>
          </Box>
        </Flex>
      </Wrapper>
    </>
  );
}

export default HackingTracks;
