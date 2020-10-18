import { ReactElement } from "react";
import { Box, Flex, Grid, Image } from "@chakra-ui/core";
import Wrapper from "@/components/Wrapper";
import { BodyAuto, HeadlineAuto } from "@/components/core/Text";

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
                `. . . . . . . . . . . . . .`,
                `. . . b . . . . . . . . . .`,
                `. . . . . . . . . . . . . .`,
                `. . . . . . . . . . . . . .`,
                `. . . . . . . . . . . . . .`,
                `. . . . . . . . . . . . . .`,
                `. . . . . . . . . . c . . .`,
                `. . . . . . . . . . . . . .`,
              ]
                .map((row) => `"${row}"`)
                .join(" ")}
            >
              <Image
              gridArea="b"
              height="750%"
                maxWidth="750%"
                rounded="full"
                src={tempGreenImg}
              />
              <Image
                gridArea="a"
                height="600%"
                maxWidth="600%"
                rounded="full"
                src={tempGreenImg}
              />
              <Image
                gridArea="c"
                height="500%"
                maxWidth="500%"
                rounded="full"
                src={tempGreenImg}
              />
            </Grid>
          </Box>
        </Flex>
      </Wrapper>
    </>
  );
}

export default HackingTracks;
