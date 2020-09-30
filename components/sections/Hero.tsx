import { ReactElement } from "react";
import { Body2, Headline3, Link } from "../core/Text";
import { CTAButton } from "../core/Button";
import theme from "@/src/theme";
import MainGraphic from "../svgs/main_graphic.svg";
import { Box, Flex } from "@chakra-ui/core";
import Decoration from "../svgs/decoration.svg";

function Hero(): ReactElement {
  const headlineFontSizes = [48, 48, 48, 72];
  const headlineLineHeights = [0.9, 0.9, 1];
  const textFontSizes = [14, 14, 16];

  return (
    <>
      <section>
        <Flex
          h={["100%", "100%", "100vh"]}
          marginTop={[20, 20, -theme.navBarOffset]}
          alignItems="center"
          flexDirection={["column", "column", "row", "row"]}
        >
          <Box w={["100%", "100%", "41%", "37.5%"]}>
            <Body2
              paddingBottom={4}
              fontSize={textFontSizes}
              color={theme.colors.brand.background_on}
            >
              February 7-9, 2021
            </Body2>
            <Headline3
              lineHeight={headlineLineHeights}
              fontSize={headlineFontSizes}
              color={theme.colors.brand.background_on}
            >
              Explore
            </Headline3>
            <Headline3
              lineHeight={headlineLineHeights}
              fontSize={headlineFontSizes}
              color={theme.colors.brand.background_on}
              whiteSpace="nowrap"
              zIndex={1}
              position="relative"
            >
              your limits.
            </Headline3>
            <Body2
              paddingTop={4}
              fontSize={textFontSizes}
              color={theme.colors.brand.background_on}
            >
              MLH Member Event · Hosted Virtually Worldwide
            </Body2>
            <Flex
              w="max-content"
              marginTop={[12, 12, 16]}
              flexDirection={["column", "column", "row", "row"]}
              alignItems={["flex-start", "flex-start", "center"]}
            >
              <CTAButton>Get Started</CTAButton>
              <Link marginLeft={[0, 0, 8]} marginTop={[12, 12, 0]}>
                Sponsor uOttaHack
              </Link>
            </Flex>
          </Box>
          <Box w={["100%", "110%", "59%", "62.5%"]} marginTop={[16, 16, 0]}>
            <MainGraphic preserveAspectRatio="xMinYMin slice" />
          </Box>
        </Flex>
        <Box
          position="absolute"
          left={-theme.decorationOffset.x}
          bottom={-theme.decorationOffset.y}
          display={["none", "none", "block"]}
        >
          <Decoration />
        </Box>
      </section>
    </>
  );
}

export default Hero;
