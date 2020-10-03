import { ReactElement, useState } from "react";
import styled from "@emotion/styled";
import { Box, Flex, Link, Stack } from "@chakra-ui/core";
import Logo from "./svgs/logo.svg";
import MLH_Banner from "./svgs/MLH_Banner.svg";
import HamburgerMenu from "react-hamburger-menu";
import theme from "@/src/theme";
import Wrapper from "@/components/Wrapper";

const NavItem = styled(Link)`
  font-family: Inter;
  font-weight: bold;
  font-size: 14px;
  color: ${theme.colors.brand.background_on};
`;

const bannerWidth = "80px";

function NavBar(): ReactElement {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Wrapper>
        <header>
          <Box position="relative" zIndex={99}>
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
                <NavItem>About</NavItem>
                <NavItem>Sponsors</NavItem>
                <NavItem>FAQ</NavItem>
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
                  isOpen={isOpen}
                  menuClicked={() => setOpen(!isOpen)}
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
