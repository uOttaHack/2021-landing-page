import { ReactElement } from "react";
import Wrapper from "@/components/Wrapper";
import { CTAButton } from "@/components/core/Button";
import { BodyAuto, HeadlineAuto } from "../core/Text";
import { Flex, Box, Link } from "@chakra-ui/core";
import SponsorGraphic from "../svgs/sponsor.svg";
import { styles } from "@/src/constants";

function SponsorEvent(): ReactElement {
  return (
    <div>
      <Wrapper>
        <Flex
          marginTop={styles.sectionTopMargin}
          justifyContent="space-between"
          alignItems="center"
          flexDirection={["column-reverse", "column-reverse", "row"]}
        >
          <Box marginTop={styles.sectionTopMargin} w={["100%", "100%", "48%"]}>
            <HeadlineAuto marginBottom="16px">
              Interested in
              <br />
              sponsoring?
            </HeadlineAuto>
            <BodyAuto>
              Over the past 3 years, our sponsors have made it possible for over
              500 developers, designers, product managers and dreamers to turn
              their ideas into a reality. uOttaHack would not be possible
              without the support and generosity of our amazing sponsors.
            </BodyAuto>
            <br />
            <BodyAuto>
              Join us for a weekend of fun and innovation, all from the comfort
              of your home!
            </BodyAuto>
            <Link
              href="mailto:sponsorship@uottahack.ca"
              display="inline-block"
              marginTop={12}
              _hover={{
                textDecoration: "none",
              }}
            >
              <CTAButton>Get in Touch</CTAButton>
            </Link>
          </Box>
          <Box w={["100%", "100%", "40%"]}>
            <SponsorGraphic />
          </Box>
        </Flex>
      </Wrapper>
    </div>
  );
}

export default SponsorEvent;
