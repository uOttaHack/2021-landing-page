import { ReactElement, Fragment } from "react";
import useStore from "@/src/store";
import styled from "@emotion/styled";
import theme from "@/src/theme";
import { Box, Divider, Flex, Link, Stack } from "@chakra-ui/core";
import { locations, socials, styles } from "@/src/constants";
import MLH_Banner from "./svgs/MLH_Banner.svg";
import HamburgerMenu from "react-hamburger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavItem = styled(Link)`
  font-family: Inter;
  font-weight: bold;
  font-size: 16px;
  color: ${theme.colors.brand.background_on};
  box-shadow: none !important;
`;

function NavOverlay(): ReactElement {
  const isNavOverlayOpen = useStore((state) => state.isNavOverlayOpen);
  const setNavOverlayOpen = useStore((state) => state.setNavOverlayOpen);

  return (
    <>
      <Box
        opacity={isNavOverlayOpen ? 1 : 0}
        visibility={isNavOverlayOpen ? "visible" : "hidden"}
        transition="opacity 0.4s, visibility 0.4s"
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
            {locations.map((location, index) => (
              <Fragment key={location.href}>
                <NavItem href={location.href} paddingY="8px">
                  {location.label}
                </NavItem>
                {index !== locations.length - 1 && <Divider />}
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
