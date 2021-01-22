import { ReactElement } from "react";
import { BodyAuto, Headline3, Link } from "@/components/core/Text";
import { CTAButton } from "@/components/core/Button";
import { styles } from "@/src/constants";
import { Box, Flex, Icon } from "@chakra-ui/core";
import Decoration from "@/components/Decoration";
import Wrapper from "@/components/Wrapper";
import Lottie from "react-lottie";
import animationData from "@/src/hero-lottie.json";
import NextLink from "next/link";

const headlineFontSizes = [48, 48, 48, 58, 72];
const headlineLineHeights = [0.9, 0.9, 1];

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const ApplyIcon = () => (
  <Flex size="14px" align="center" marginLeft="8px" overflow="visible">
    <Icon name="arrow-forward" size="24px" />
  </Flex>
);

function Hero(): ReactElement {
  return (
    <>
      <Box position="relative" marginTop={["4em", "4em", 0]}>
        <Wrapper>
          <Flex
            h={["auto", "auto", "100vh"]}
            marginTop={[20, 20, -styles.navBarOffset]}
            minHeight={["auto", "auto", "48em"]}
          >
            <Flex
              h="100%"
              w="100vw"
              alignItems="center"
              flexDirection={["column", "column", "row", "row"]}
            >
              <Box w={["100%", "100%", "41%", "37.5%"]}>
                <BodyAuto paddingBottom={4}>February 5-7, 2021</BodyAuto>
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
                <BodyAuto paddingTop={4}>Applications due January 22</BodyAuto>
                <Flex
                  w="max-content"
                  marginTop={[12, 12, 16]}
                  flexDirection={["column", "column", "row", "row"]}
                  alignItems={["flex-start", "flex-start", "center"]}
                >
                  <NextLink href="/apply" passHref>
                    <Link>
                      <CTAButton rightIcon={ApplyIcon}>Apply Now</CTAButton>
                    </Link>
                  </NextLink>
                  <Link
                    href="mailto:sponsorship@uottahack.ca"
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
                <Lottie
                  options={lottieOptions}
                  isClickToPauseDisabled
                  ariaRole="img"
                />
              </Box>
            </Flex>
          </Flex>
        </Wrapper>
        <Decoration horizontalAlign="left" verticalAlign="bottom" />
      </Box>
    </>
  );
}

export default Hero;
