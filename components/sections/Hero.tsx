import { ReactElement } from "react";
import { BodyAuto, Headline3, Link } from "../core/Text";
import { CTAButton } from "../core/Button";
import constants from "@/src/constants";
import MainGraphic from "../svgs/main_graphic.svg";
import { Box, Flex } from "@chakra-ui/core";
import Decoration from "@/components/Decoration";

const headlineFontSizes = [48, 48, 48, 58, 72];
const headlineLineHeights = [0.9, 0.9, 1];

function Hero(): ReactElement {
  return (
    <>
      <Box position="relative" marginTop={["4em", "4em", 0]}>
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
              <BodyAuto paddingBottom={4}>February 7-9, 2021</BodyAuto>
              <Headline3
                lineHeight={headlineLineHeights}
                fontSize={headlineFontSizes}
                whiteSpace="nowrap"
                zIndex={1}
              >
                Explore <br /> your limits.
              </Headline3>
              <BodyAuto paddingTop={4}>
                MLH Member Event · Hosted Virtually Worldwide
              </BodyAuto>
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
