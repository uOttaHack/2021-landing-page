import styled from "@emotion/styled";
import { Button as ChakraButton } from "@chakra-ui/core";
import theme from "@/src/theme";

export const Button = styled(ChakraButton)`
  font-family: Inter;
  font-size: 14px;
  height: auto;
  border-radius: 4px;
`;

export const CTAButton = styled(Button)`
  font-weight: bold;
  color: white;
  background: ${theme.colors.brand.primary};
  padding: 16px 42px;
  position: relative;

  &:hover {
    background: ${theme.colors.brand.primary_variant};

    &::after {
      top: 3px;
      left: 3px;
    }
  }

  &::after {
    background-image: url("/images/button_background.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    top: 8px;
    left: 5px;
    transition: top 0.1s, left 0.1s;
    z-index: -1;
  }
`;

export const PrimaryButton = styled(Button)`
  font-weight: 400;
  color: white;
  padding: 4px 16px;
  background: ${theme.colors.brand.background_on};
  border: 1px solid ${theme.colors.brand.background_on};

  &:hover {
    background: ${theme.colors.brand.background_on};
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  font-weight: 400;
  color: ${theme.colors.brand.background_on};
  background: none;

  &:hover {
    color: white;
    background: ${theme.colors.brand.background_on};
  }
`;

export const DangerButton = styled(Button)`
  font-weight: 400;
  color: white;
  padding: 4px 16px;
  background: ${theme.colors.brand.error};
  border: 1px solid ${theme.colors.brand.error};

  &:hover {
    background: ${theme.colors.brand.error_variant};
    border: 1px solid ${theme.colors.brand.error_variant};
  }
`;
