import { ReactElement } from "react";
import { Body1, Headline1, Link } from "../core/Text";
import { CTAButton } from "../core/Button";
import theme from "@/src/theme";
import MainGraphic from "../svgs/main_graphic.svg";
import { Box, Flex } from "@chakra-ui/core";
import Decoration from "../svgs/decoration.svg";

function Hero(): ReactElement {
  return (
  <>
    <section>
      <Flex h="100vh" position="relative" marginTop={-69.2} justifyContent="space-between" alignItems="center">
        <Box>
          <Body1 paddingBottom={4}>
            February 7-9, 2021
          </Body1>
          <Headline1 lineHeight={1} color={theme.colors.brand.background_on}>
            Explore
          </Headline1>
          <Headline1 lineHeight={1} color={theme.colors.brand.background_on}>
            your limits.
          </Headline1>
          <Body1 paddingTop={4}>
            MLH Member Event · Hosted Virtually Worldwide 
          </Body1>
          <Flex alignItems="center" marginTop={16}>
            <CTAButton>
              Get Started
            </CTAButton>
            <Link marginLeft={8}>
              Sponsor uOttaHack
            </Link>
          </Flex>
        </Box>
        <MainGraphic/>
      </Flex>
      <Box position="absolute" left={-190} bottom={-202}>
        <Decoration />
      </Box>
    </section>
  </>
  );
}

export default Hero;
