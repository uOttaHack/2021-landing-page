import { ReactElement } from "react";
import Wrapper from "@/components/Wrapper";
import { CTAButton } from "@/components/core/Button";
import { BodyAuto, HeadlineAuto } from "../core/Text";
import { Flex, Box } from "@chakra-ui/core";
import SponsorGraphic from "../svgs/sponsor.svg";
import constants from "@/src/constants";

function SponsorEvent(): ReactElement {
  return (
    <>
      <Wrapper>
        <Flex
          minHeight={["0", "0", "48em"]}
          marginTop={constants.sectionTopMargin}
          justifyContent="space-between"
          alignItems="center"
          flexDirection={["column-reverse", "column-reverse", "row"]}
        >
          <Box
            marginTop={constants.sectionTopMargin}
            w={["100%", "100%", "48%"]}
          >
            <HeadlineAuto marginBottom="16px">
              Sponsor a special <br />
              weekend
            </HeadlineAuto>
            <BodyAuto>
              Each year, our sponsors empower us to unite over 400 emerging
              developers, designers, and imaginaries. Your support make it
              possible for hackers to build something they are proud of.
            </BodyAuto>
            <CTAButton marginTop={12}>Get in Touch</CTAButton>
          </Box>
          <Box w={["100%", "100%", "40%"]}>
            <SponsorGraphic />
          </Box>
        </Flex>
      </Wrapper>
    </>
  );
}

export default SponsorEvent;
