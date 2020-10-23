import { ReactElement } from "react";
import styled from "@emotion/styled";
import { Box, Flex, Link, Stack } from "@chakra-ui/core";
import Logo from "./svgs/logo.svg";
import MLH_Banner from "./svgs/MLH_Banner.svg";
import HamburgerMenu from "react-hamburger-menu";
import theme from "@/src/theme";
import useStore from "@/src/store";
import { locations } from "@/src/constants";
import Wrapper from "@/components/Wrapper";
import NavOverlay from "@/components/NavOverlay";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavItem = styled(Box)`
  font-family: Inter;
  font-weight: bold;
  font-size: 14px;
  color: ${theme.colors.brand.background_on};
`;

const bannerWidth = "80px";

function NavBar(): ReactElement {
  const setNavOverlayOpen = useStore((state) => state.setNavOverlayOpen);

  return (
    <>
      <NavOverlay />
      <Wrapper>
        <header>
          <Box position="relative" zIndex={1}>
            <Box position="relative">
              <Link
                display={["none", "none", "block", "block"]}
                width={bannerWidth}
                position="absolute"
                right={0}
                _focus={{}}
                href="https://mlh.io/seasons/2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=black"
                isExternal
              >
                <MLH_Banner
                  width="100%"
                  height="100%"
                  viewBox="0 0 100 175.063"
                  preserveAspectRatio="xMaxYMax"
                />
              </Link>
            </Box>
            <Flex align="center" justify="space-between" paddingTop="0.2in">
              <Box width="50px" height="50px">
                <Logo
                  width="100%"
                  height="100%"
                  viewBox="0 0 236.917 230.814"
                  preserveAspectRatio="xMaxYMax"
                />
              </Box>
              <Stack
                display={["none", "none", "block", "block"]}
                direction="row"
                spacing="8vw"
              >
                {locations.map(({ href, label }) => (
                  <NavItem key={href} display="inline">
                    <AnchorLink href={href}>{label}</AnchorLink>
                  </NavItem>
                ))}
              </Stack>
              <Box
                display={["none", "none", "block", "block"]}
                width={bannerWidth}
              />
              <Box
                display={["block", "block", "none", "none"]}
                cursor="pointer"
              >
                <HamburgerMenu
                  isOpen={false}
                  menuClicked={() => setNavOverlayOpen(true)}
                  height={18}
                  width={28}
                  strokeWidth={3}
                  rotate={180}
                />
              </Box>
            </Flex>
          </Box>
        </header>
      </Wrapper>
    </>
  );
}

export default NavBar;
