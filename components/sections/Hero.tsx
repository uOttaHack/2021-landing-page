import { ReactElement } from "react";
import { Body1, Headline1, Link } from "../core/Text";
import { CTAButton } from "../core/Button";
import theme from "@/src/theme";
import MainGraphic from "../svgs/main_graphic.svg";
import { Grid, Box, Flex } from "@chakra-ui/core";
import Decoration from "../svgs/decoration.svg";

function Hero(): ReactElement {
  const headlineSizes = [48, 48, 48, 88];

  return (
    <>
      <section>
        <Grid
          h="100vh"
          marginTop={-theme.navBarOffset}
          alignItems="center"
          autoFlow="row"
          templateColumns="40% 60%"
        >
          <Box w="100%">
            <Body1 paddingBottom={4}>February 7-9, 2021</Body1>
            <Headline1
              lineHeight={1}
              fontSize={headlineSizes}
              color={theme.colors.brand.background_on}
            >
              Explore
            </Headline1>
            <Headline1
              lineHeight={1}
              fontSize={headlineSizes}
              color={theme.colors.brand.background_on}
            >
              your limits.
            </Headline1>
            <Body1 paddingTop={4}>
              MLH Member Event · Hosted Virtually Worldwide
            </Body1>
            <Flex alignItems="center" marginTop={16}>
              <CTAButton>Get Started</CTAButton>
              <Link marginLeft={8}>Sponsor uOttaHack</Link>
            </Flex>
          </Box>
          <MainGraphic preserveAspectRatio="xMinYMin slice" />
        </Grid>
        <Box
          position="absolute"
          left={-theme.decorationOffset.x}
          bottom={-theme.decorationOffset.y}
        >
          <Decoration />
        </Box>
      </section>
    </>
  );
}

export default Hero;
