import { ReactElement, FC } from "react";
import styled from "@emotion/styled";
import { Box, Flex } from "@chakra-ui/core";
import { BodyAuto, Headline } from "@/components/core/Text";

const HeaderText = styled(Headline)`
  font-size: 18px;
`;

const iconWidth = ["0.5in", "0.5in", "0.7in", "0.8in"];

export interface IChallengeItem {
  title: string;
  description: string;
  Icon: FC;
}

function ChallengeItem({
  title,
  description,
  Icon,
}: IChallengeItem): ReactElement {
  const ChallengeIcon = styled(Icon)`
    width: 100%;
    height: 100%;
  `;

  return (
    <Box>
      <Flex direction={["column", "column", "row"]}>
        <Box
          minWidth={iconWidth}
          maxWidth={iconWidth}
          padding="4px"
          marginRight="2rem"
        >
          <ChallengeIcon />
        </Box>
        <Box>
          <HeaderText>{title}</HeaderText>
          <BodyAuto>{description}</BodyAuto>
        </Box>
      </Flex>
    </Box>
  );
}

export default ChallengeItem;
