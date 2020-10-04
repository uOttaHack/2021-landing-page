import { ReactElement } from "react";
import { BodyAuto, Headline5 } from "../core/Text";
import { Box, Flex } from "@chakra-ui/core";
import Decoration from "@/components/Decoration";
import Wrapper from "@/components/Wrapper";

const headlineFontSizes = [24, 24, 34, 48];
const headlineLineHeights = [1.5, 1.25, 1.1];

function TeamMessage(): ReactElement {
  return (
    <>
      <Box position="relative">
        <Wrapper>
          <Flex
            minHeight={[0, 0, "48em"]}
            marginTop="8em"
            w="100%"
            alignItems="center"
          >
            <Flex
              w="100%"
              h="100%"
              flexDirection="column"
              justifyContent="center"
            >
              <BodyAuto marginBottom="12px">
                Before we start, here is a message from the team:
              </BodyAuto>
              <Headline5
                lineHeight={headlineLineHeights}
                fontSize={headlineFontSizes}
              >
                Due to the COVID-19 pandemic, we will be holding our event
                virtually, instead of an in-person event. The health and safety
                of our attendees is our top priority.
              </Headline5>
              <Headline5
                lineHeight={headlineLineHeights}
                marginTop={16}
                fontSize={headlineFontSizes}
              >
                We will continue to monitor the situation and provide updates on
                our website and social media channels should there be any
                changes to our event.
              </Headline5>
              <BodyAuto
                textAlign={["left", "left", "center"]}
                marginTop={["24px", "24px", "8em"]}
              >
                Scroll to continue.
              </BodyAuto>
            </Flex>
          </Flex>
        </Wrapper>
        <Decoration horizontalAlign="right" verticalAlign="bottom" />
      </Box>
    </>
  );
}

export default TeamMessage;
