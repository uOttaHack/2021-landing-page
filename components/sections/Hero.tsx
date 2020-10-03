import { ReactElement } from "react";
import { Body2, Headline3, Link } from "../core/Text";
import { CTAButton } from "../core/Button";
import constants from "@/src/constants";
import MainGraphic from "../svgs/main_graphic.svg";
import { Box, Flex } from "@chakra-ui/core";
import Decoration from "@/components/Decoration";

const headlineFontSizes = [48, 48, 48, 58, 72];
const headlineLineHeights = [0.9, 0.9, 1];
const textFontSizes = [14, 14, 16];

function Hero(): ReactElement {
  return (
    <>
      <Box position="relative">
        <Flex
          h={["auto", "auto", "100vh"]}
          marginTop={[20, 20, -constants.navBarOffset]}
          paddingX={constants.paddingX}
          minHeight={["auto", "auto", "48em"]}
        >
          <Flex
            h="100%"
            w="100vw"
            alignItems="center"
            flexDirection={["column", "column", "row", "row"]}
          >
            <Box w={["100%", "100%", "41%", "37.5%"]}>
              <Body2 paddingBottom={4} fontSize={textFontSizes}>
                February 7-9, 2021
              </Body2>
              <Headline3
                lineHeight={headlineLineHeights}
                fontSize={headlineFontSizes}
                whiteSpace="nowrap"
                zIndex={1}
              >
                Explore <br /> your limits.
              </Headline3>
              <Body2 paddingTop={4} fontSize={textFontSizes}>
                MLH Member Event · Hosted Virtually Worldwide
              </Body2>
              <Flex
                w="max-content"
                marginTop={[12, 12, 16]}
                flexDirection={["column", "column", "row", "row"]}
                alignItems={["flex-start", "flex-start", "center"]}
              >
                <CTAButton>Get Started</CTAButton>
                <Link
                  href="mailto:sponsor@uottahack.ca"
                  marginLeft={[0, 0, 8]}
                  marginTop={[12, 12, 0]}
                >
                  Sponsor uOttaHack
                </Link>
              </Flex>
            </Box>
            <Box
              w={["100%", "110%", "59%", "62.5%", "70%"]}
              marginTop={[16, 32, 0]}
            >
              <MainGraphic preserveAspectRatio="xMinYMin slice" />
            </Box>
          </Flex>
        </Flex>
        <Decoration horizontalAlign="left" verticalAlign="bottom" />
      </Box>
    </>
  );
}

export default Hero;
