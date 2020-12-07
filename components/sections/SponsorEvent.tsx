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
              Sponsor a special <br />
              weekend
            </HeadlineAuto>
            <BodyAuto>
              Each year, our sponsors empower us to unite over 400 emerging
              developers, designers, and imaginaries. Your support makes it
              possible for hackers to build something they are proud of.
            </BodyAuto>
            <Link
              href="mailto:sponsor@uottahack.ca"
              display="inline-block"
              marginTop={12}
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
