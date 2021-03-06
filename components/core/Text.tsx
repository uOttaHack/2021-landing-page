import styled from "@emotion/styled";
import { Link as ChakraLink, Text } from "@chakra-ui/core";
import theme from "@/src/theme";

export const Headline = styled(Text)`
  font-family: Gilroy;
  font-weight: 800;
  color: ${theme.colors.brand.background_on};
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

export const HeadlineAuto = styled(Headline)`
  font-size: 34px;
  line-height: 1.25;

  @media only screen and (min-width: ${theme.breakpoints[2]}) {
    font-size: 48px;
  }
`;

export const Body = styled(Text)`
  font-family: Inter;
  font-weight: normal;
  color: ${theme.colors.brand.background_on};
`;

export const Body1 = styled(Body)`
  font-size: 16px;
`;

export const Body2 = styled(Body)`
  font-size: 14px;
`;

export const BodyAuto = styled(Body)`
  font-size: 14px;

  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    font-size: 16px;
  }
`;

export const Button = styled(Text)`
  font-family: Inter;
  font-weight: 500;
  font-size: 14px;
  color: ${theme.colors.brand.background_on};
`;

export const Caption = styled(Text)`
  font-family: Inter;
  font-weight: normal;
  font-size: 12px;
  color: ${theme.colors.brand.background_on};
`;

export const Link = styled(ChakraLink)`
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  color: ${theme.colors.brand.primary};

  &:hover {
    text-decoration: none;
    color: ${theme.colors.brand.primary_variant};
  }
`;
