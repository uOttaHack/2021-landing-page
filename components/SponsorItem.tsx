import { Box, BoxProps, Image, Link } from "@chakra-ui/core";
import styled from "@emotion/styled";
import { ReactElement } from "react";

export interface SponsorProps extends BoxProps {
  imgUrl: string;
  sponsorUrl: string;
  faded?: boolean;
}

const SponsorItem = styled(SponsorItemInner)`
  margin: 32px 0;
  transition: all 0.3s ease-in-out;
  transition-delay: 0.1s;
`;

const SponsorLogo = styled(Image)`
  user-select: none;
  margin: 0 auto;
`;

function SponsorItemInner({
  imgUrl,
  sponsorUrl,
  faded,
  ...boxProps
}: SponsorProps): ReactElement {
  return (
    <Box {...boxProps} opacity={faded ? 0.3 : 1}>
      <Link isExternal href={sponsorUrl} display="block">
        <SponsorLogo src={imgUrl} />
      </Link>
    </Box>
  );
}

export default SponsorItem;
