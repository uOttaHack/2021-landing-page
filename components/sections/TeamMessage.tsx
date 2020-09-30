import { ReactElement } from "react";
import { Body2, Headline5 } from "../core/Text";
import theme from "@/src/theme";
import { Box, Flex } from "@chakra-ui/core";
import Decoration from "@/components/Decoration";

function TeamMessage(): ReactElement {
  const headlineFontSizes = [24, 24, 34, 48];
  const headlineLineHeights = [1.5, 1.25, 1.1];
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
          <Headline5
            lineHeight={headlineLineHeights}
            marginTop={8}
            fontSize={headlineFontSizes}
            color={theme.colors.brand.background_on}
          >
            Due to the COVID-19 pandemic, we will be holding our event
            virtually, instead of an in-person event. The health and safety of
            our attendies is our top priority.
          </Headline5>
          <Headline5
            lineHeight={headlineLineHeights}
            marginTop={16}
            fontSize={headlineFontSizes}
            color={theme.colors.brand.background_on}
          >
            We will continue to monitor the situation and provide updates on our
            website and social media channels should there be any changes to our
            event.
          </Headline5>
          <Body2
            color={theme.colors.brand.background_on}
            fontSize={textFontSizes}
            textAlign={["left", "left", "center"]}
            marginTop={[8, 8, 186]}
          >
            Scroll to continue.
          </Body2>
        </Flex>
        <Decoration side="right" viewPortFactor={2} />
      </section>
    </>
  );
}

export default TeamMessage;
