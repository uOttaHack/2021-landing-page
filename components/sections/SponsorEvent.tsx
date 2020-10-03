import { ReactElement } from "react";
import Wrapper from "@/components/Wrapper";
import { CTAButton } from "@/components/core/Button";
import { Body2, Headline4 } from "../core/Text";
import { Flex, Box } from "@chakra-ui/core";
import SponsorGraphic from "../svgs/sponsor.svg";
import theme from "@/src/theme";

function SponsorEvent(): ReactElement {
  return (
    <>
      <Wrapper>
        <Flex
          minHeight={["none", "none", "48em"]}
          marginTop={theme.marginTop}
          justifyContent="space-between"
          alignItems="center"
          flexDirection={["column-reverse", "column-reverse", "row"]}
        >
          <Box marginTop={["8em", "8em", "none"]} w={["100%", "100%", "48%"]}>
            <Headline4 lineHeight="110%" marginBottom="16px">
              Sponsor a special <br />
              weekend
            </Headline4>
            <Body2 fontSize={[14, 14, 16]}>
              Each year, our sponsors empower us to unite over 400 emerging
              developers, designers, and imaginaries. Your support make it
              possible for hackers to build something they are proud of.
            </Body2>
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
