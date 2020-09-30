import { ReactElement } from "react";
import { Body2, Headline6 } from "../core/Text";
import theme from "@/src/theme";
import { Flex } from "@chakra-ui/core";

function TeamMessage(): ReactElement {
  const headlineFontSizes = [20, 24, 34, 48];
  const textFontSizes = [14, 14, 16];

  return (
    <>
      <section>
        <Flex h="100vh" w="100%" flexDirection="column" justifyContent="center">
          <Body2
            color={theme.colors.brand.background_on}
            fontSize={textFontSizes}
          >
            Before we start, here is a message from the team:
          </Body2>
          <Headline6
            lineHeight={1.1}
            marginTop={8}
            fontSize={headlineFontSizes}
            color={theme.colors.brand.background_on}
          >
            Due to the COVID-19 pandemic, we will be holding our event
            virtually, instead of an in-person event. The health and safety of
            our attendies is our top priority.
          </Headline6>
          <Headline6
            lineHeight={1.1}
            marginTop={16}
            fontSize={headlineFontSizes}
            color={theme.colors.brand.background_on}
          >
            We will continue to monitor the situation and provide updates on our
            website and social media channels should there be any changes to our
            event.
          </Headline6>
          <Body2
            color={theme.colors.brand.background_on}
            fontSize={textFontSizes}
            textAlign="center"
            marginTop={200}
          >
            Scroll to continue.
          </Body2>
        </Flex>
      </section>
    </>
  );
}

export default TeamMessage;
