import { ReactElement } from "react";
import styled from "@emotion/styled";
import { Box, Divider, Flex, Link } from "@chakra-ui/core";
import { Headline, Body, Caption } from "@/components/core/Text";
import EmailInput from "@/components/EmailInput";
import theme from "@/src/theme";
import { socials } from "@/src/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Wrapper from "@/components/Wrapper";

const Wordmark = styled(Headline)`
  font-family: "Harabara";
  font-size: 32px;
  line-height: 100%;
  margin-bottom: 4px;
`;

const GreyCaption = styled(Caption)`
  color: grey;
`;

const footerItemMarginX = "1.5vw";
const footerItemMarginY = ["16px", "16px", "16px", 0];

const FooterLink = styled(Link)`
  font-family: Inter;
  font-weight: normal;
  font-size: 12px;
  color: ${theme.colors.brand.background_on};
`;

const FooterText = styled(Body)`
  font-size: 12px;
`;

function Footer(): ReactElement {
  return (
    <>
      <Wrapper>
        <footer>
          <Box paddingBottom="30vw">
            <Divider
              marginTop={["2in", "2.5in", "2.5in", "3in"]}
              marginBottom={["0.4in", "0.6in", "0.8in", "1in"]}
              borderColor="#dbdbdb"
            />
            <Flex
              direction={["column", "column", "row", "row"]}
              marginBottom={["0.4in", "0.4in", "0.8in", "1.5in"]}
              align="center"
              justify="space-between"
            >
              <Box textAlign={["center", "center", "left", "left"]}>
                <Wordmark>uOttaHack</Wordmark>
                <GreyCaption marginBottom={["24px", "24px", 0]}>
                  The capital of Canada&apos;s largest hackathon.
                </GreyCaption>
              </Box>
              <EmailInput />
            </Flex>
            <Flex
              justify="space-between"
              align="center"
              direction={["column", "column", "column", "row"]}
            >
              <Flex
                direction={["column", "column", "column", "row"]}
                textAlign={["center", "center", "center", "left"]}
              >
                <FooterLink
                  marginY={footerItemMarginY}
                  marginRight={[0, 0, 0, footerItemMarginX]}
                  href="https://mlh.io/privacy"
                  isExternal
                >
                  Privacy Policy
                </FooterLink>
                <FooterLink
                  marginY={footerItemMarginY}
                  marginRight={[0, 0, 0, footerItemMarginX]}
                  href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                  isExternal
                >
                  Code of Conduct
                </FooterLink>
                <FooterLink
                  marginY={footerItemMarginY}
                  href="https://github.com/uOttaHack"
                  isExternal
                >
                  GitHub
                </FooterLink>
              </Flex>
              <Flex direction="row" marginY={["24px", "24px", "24px", 0]}>
                {socials.map(({ href, icon }) => (
                  <Link
                    key={href}
                    href={href}
                    isExternal
                    marginX={["16px", "16px", "16px", footerItemMarginX]}
                  >
                    <FontAwesomeIcon width="20px" icon={icon} />
                  </Link>
                ))}
              </Flex>
              <FooterText>Presented by The uOttaHack Team</FooterText>
            </Flex>
          </Box>
        </footer>
      </Wrapper>
    </>
  );
}

export default Footer;
