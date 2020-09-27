import styled from "@emotion/styled";
import { Link as ChakraLink, Text } from "@chakra-ui/core";

export const Headline = styled(Text)`
  font-weight: bolder;
`;

export const Headline1 = styled(Headline)`
  font-size: 96px;
`;

export const Headline2 = styled(Headline)`
  font-size: 60px;
`;

export const Headline3 = styled(Headline)`
  font-size: 48px;
`;

export const Headline4 = styled(Headline)`
  font-size: 34px;
`;

export const Headline5 = styled(Headline)`
  font-size: 24px;
`;

export const Headline6 = styled(Headline)`
  font-size: 20px;
`;

export const Body = styled(Text)`
  font-weight: normal;
`;

export const Body1 = styled(Body)`
  font-size: 16px;
`;

export const Body2 = styled(Body)`
  font-size: 14px;
`;

export const Caption = styled(Text)`
  font-weight: normal;
  font-size: 12px;
`;

export const Link = styled(ChakraLink)`
  font-weight: 700;
  font-size: 14px;
`;
