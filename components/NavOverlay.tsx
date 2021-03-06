import { ReactElement, Fragment } from "react";
import useStore from "@/src/store";
import styled from "@emotion/styled";
import theme from "@/src/theme";
import { Box, Divider, Flex, Link, Stack } from "@chakra-ui/core";
import { locations, socials, styles } from "@/src/constants";
import MLH_Banner from "./svgs/MLH_Banner.svg";
import HamburgerMenu from "react-hamburger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavItem = styled(Box)`
  font-family: Inter;
  font-weight: bold;
  font-size: 16px;
  color: ${theme.colors.brand.background_on};
`;

function NavOverlay(): ReactElement {
  const isNavOverlayOpen = useStore((state) => state.isNavOverlayOpen);
  const setNavOverlayOpen = useStore((state) => state.setNavOverlayOpen);

  const handleNavLinkClick = () => {
    setNavOverlayOpen(false);
  };

  return (
    <>
      <Box
        display={["block", "block", "none", "none"]}
        opacity={isNavOverlayOpen ? 1 : 0}
        visibility={isNavOverlayOpen ? "visible" : "hidden"}
        transition="opacity 0.2s, visibility 0.2s"
        position="fixed"
        zIndex={10}
        width="100%"
        height="100vh"
      >
        <Flex
          position="fixed"
          direction="column"
          marginTop="0.2in"
          marginX={styles.paddingX}
          paddingX="24px"
          width={styles.paddingX.map(
            (paddingX) => `calc(100vw - 2*${paddingX})`
          )}
          background="white"
          rounded="4px"
          boxShadow="2px 4px 12px rgba(0,0,0,0.2)"
          overflow="hidden"
        >
          <Flex justify="space-between" marginBottom="0.3in">
            <Link
              href="https://mlh.io/seasons/2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=black"
              isExternal
              width="56px"
            >
              <MLH_Banner
                width="100%"
                height="100%"
                viewBox="0 0 100 175.063"
                preserveAspectRatio="xMaxYMax"
              />
            </Link>
            <Box
              onClick={() => setNavOverlayOpen(false)}
              cursor="pointer"
              marginTop="16px"
              padding="8px"
              height="100%"
            >
              <HamburgerMenu
                isOpen={true}
                menuClicked={() => undefined}
                height={16}
                width={16}
                strokeWidth={3}
                rotate={180}
              />
            </Box>
          </Flex>
          <Stack marginBottom="0.4in">
            {locations.map(({ href, label }, index) => (
              <Fragment key={href}>
                {index !== 0 && <Divider />}
                <AnchorLink
                  href={href}
                  style={{ padding: "8px 0px" }}
                  onClick={handleNavLinkClick}
                >
                  <NavItem>{label}</NavItem>
                </AnchorLink>
              </Fragment>
            ))}
          </Stack>
          <Flex justify="center">
            <Flex
              backgroundColor="brand.dark_green"
              width="180px"
              height="72px"
              borderRadius="4px 4px 0px 0px"
              justify="center"
              align="center"
            >
              {socials.map(({ href, icon }) => (
                <Link key={href} href={href} isExternal marginX="16px">
                  <FontAwesomeIcon width="16px" color="white" icon={icon} />
                </Link>
              ))}
            </Flex>
          </Flex>
        </Flex>
        <Box
          onClick={() => setNavOverlayOpen(false)}
          width="100%"
          height="100%"
        />
      </Box>
    </>
  );
}

export default NavOverlay;
