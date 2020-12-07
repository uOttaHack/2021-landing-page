import { ReactElement } from "react";
import styled from "@emotion/styled";
import { Box, Flex, Image } from "@chakra-ui/core";
import Wrapper from "@/components/Wrapper";
import { BodyAuto, HeadlineAuto } from "@/components/core/Text";
import { LocationHashEnum } from "@/src/constants";

const BubbleImage = styled(Image)`
  position: absolute;
  object-fit: cover;
  border-radius: 9999px;
`;

function About(): ReactElement {
  return (
    <div id={LocationHashEnum.About}>
      <Wrapper>
        <Flex
          marginTop="8em"
          justifyContent="space-between"
          alignItems="center"
          flexDirection={["column-reverse", "column-reverse", "row"]}
        >
          <Box
            width={["100%", "100%", "50%"]}
            marginRight={[0, 0, "0.5in"]}
            marginTop={["5em", "5em", 0]}
          >
            <HeadlineAuto marginBottom="16px">
              Ottawa&apos;s largest
              <br />
              hackathon has
              <br />
              turned 4!
            </HeadlineAuto>
            <BodyAuto>
              uOttaHack is uOttawa&apos;s largest hackathon and this year will
              be its more exciting iteration yet! To commemorate this special
              milestone, uOttaHack 4 is expanding the hacker experience with new
              initiatives to create an unforgettable weekend for its hackers,
              VIRTUALLY!
            </BodyAuto>
            <br />
            <BodyAuto>
              COVID-19 has brought the greatest medical challenge that world has
              seen in our generation. For uOttaHack 4, we are bringing hackers
              together to help build solutions for issues our local community is
              facing due to COVID-19. After reaching out to multiple local
              businesses such as hospitals, nursing homes and hotels, we have
              created challenges that will help the city of Ottawa recover.
              Details to be announced!
            </BodyAuto>
          </Box>
          <Box
            position="relative"
            size={["2.5in", "4in", "3in", "3.5in", "4.5in"]}
          >
            <BubbleImage top="0" left="7%" size="33%" src="/images/2020a.jpg" />
            <BubbleImage
              bottom="4%"
              left="4%"
              size="54%"
              src="/images/2020b.jpg"
            />
            <BubbleImage
              top="8%"
              right="2%"
              size="42%"
              src="/images/2020c.jpg"
            />
            <BubbleImage
              bottom="1%"
              right="2%"
              size="28%"
              src="/images/2020d.jpg"
            />
          </Box>
        </Flex>
      </Wrapper>
    </div>
  );
}

export default About;
