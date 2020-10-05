import { ReactElement } from "react";
import { Box, Flex, Grid, Image } from "@chakra-ui/core";
import Wrapper from "@/components/Wrapper";
import { BodyAuto, HeadlineAuto } from "@/components/core/Text";

const toInches = (sizes: number[]) => sizes.map((size) => `${size}in`);
const bubbleGridWidths = [2.5, 4, 3, 3.5, 4.5];
const bubbleGridHeights = bubbleGridWidths.map((width) => (width * 8) / 7);

const tempGreenImg =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUWlHxHwAEWQI7NLZUaQAAAABJRU5ErkJggg==";

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
              gridTemplateColumns={"1fr ".repeat(14)}
              gridTemplateRows={"1fr ".repeat(16)}
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
                src={tempGreenImg}
              />
              <Image
                gridArea="b"
                height="800%"
                maxWidth="800%"
                rounded="full"
                src={tempGreenImg}
              />
              <Image
                gridArea="c"
                height="650%"
                maxWidth="650%"
                rounded="full"
                src={tempGreenImg}
              />
              <Image
                gridArea="d"
                height="450%"
                maxWidth="450%"
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

export default About;
