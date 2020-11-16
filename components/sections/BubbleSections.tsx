import { ReactElement, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Box, Flex } from "@chakra-ui/core";
import { animated, interpolate, useTransition } from "react-spring";
import { BodyAuto, HeadlineAuto } from "@/components/core/Text";
import Wrapper from "@/components/Wrapper";

const GreenBubble = styled(animated.div)`
  position: absolute;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
  cursor: pointer;
  width: 100px;
  height: 100px;
  background-color: #008e66;
  border-radius: 50%;
  text-align: center;
`;

const AnimatedTitleContainer = styled(animated.div)`
  position: relative;
  display: flex;
  align-items: center;
  height: 0px;
`;

const bubbleData1 = [
  {
    key: "a",
    size: 1,
    position: 0,
  },
  {
    key: "b",
    size: 1.5,
    position: 1,
  },
  {
    key: "c",
    size: 1,
    position: 2,
  },
];
const titleData1 = [
  {
    key: "a",
    component: (
      <Box marginRight={[0, 0, "0.5in"]}>
        <HeadlineAuto marginBottom="16px">
          Ottawa&apos;s largest
          <br />
          hackathon has
          <br />
          turned 4!
        </HeadlineAuto>
        <BodyAuto>
          Hosted at the University of Ottawa, uOttaHack is Ottawa&apos;s largest
          hackathon and this year will be its most exciting iteration yet! To
          commemorate this special milestone, uOttaHack 3 is expanding the
          hacker experience with new initiatives to create an unforgettable
          weekend for its hackers.
        </BodyAuto>
        <br />
        <BodyAuto>
          Now a 36 hour long hackathon, uOttaHack 3 will welcome over 400
          students on February 7th-9th from a diverse set of backgrounds to
          collaborate on projects, learn at workshops, and build out their
          innovative ideas.
        </BodyAuto>
      </Box>
    ),
  },
];
const bubbleData2 = [
  {
    key: "e",
    size: 1.5,
    position: 0,
  },
  {
    key: "f",
    size: 1.5,
    position: 1,
  },
  {
    key: "g",
    size: 1,
    position: 2,
  },
];
const titleData2 = [
  {
    key: "b",
    component: (
      <Box marginRight={[0, 0, "0.5in"]}>
        <HeadlineAuto marginBottom="16px">Hacking Tracks</HeadlineAuto>
        <BodyAuto>
          In uOttaHack 3, we introduced Hacking Tracks, specific categories for
          hackers to build their projects around that addresses problems in the
          real world. Teams have the creative freedom while also collectively
          working on a real world challenge.
        </BodyAuto>
        <br />
        <BodyAuto>
          Check out submissions from last year&apos;s tracks by clicking on the
          bubbles!
        </BodyAuto>
      </Box>
    ),
  },
];

function BubbleSections(props: { onFirst: boolean }): ReactElement {
  const [items, setItems] = useState(props.onFirst ? bubbleData1 : bubbleData2);
  const [title, setTitle] = useState(props.onFirst ? titleData1 : titleData2);

  const transitions = useTransition(items, (item) => item.key, {
    from: {
      height: 1000,
      width: 0.5,
      opacity: 0,
    },
    enter: {
      height: 200,
      width: 1,
      opacity: 1,
    },
    leave: {
      height: -300,
      width: 0.5,
      opacity: 0,
    },
    trail: 100,
  });

  useEffect(() => {
    const data = props.onFirst ? bubbleData1 : bubbleData2;
    const title = props.onFirst ? titleData1 : titleData2;

    setItems([]);
    setTitle([]);
    setTimeout(() => setItems(data), 300);
    setTimeout(() => setTitle(title), 600);
  }, [props.onFirst]);

  const titleTransitions = useTransition(title, (item) => item.key, {
    from: {
      transform: "translate3d(0,-40px,0)",
      opacity: 0,
    },
    enter: {
      transform: "translate3d(0,0px,0)",
      opacity: 1,
    },
    leave: {
      transform: "translate3d(0,-40px,0)",
      opacity: 0,
    },
  });

  return (
    <Wrapper>
      <Flex width="100%" height="100vh">
        <Flex direction="column" justify="center" width="50%" height="100%">
          {titleTransitions.map(({ item, key, props }) => (
            <AnimatedTitleContainer key={key} style={props}>
              {item.component}
            </AnimatedTitleContainer>
          ))}
        </Flex>
        <div className="container">
          {transitions.map(({ item, key, props }) => {
            const { height, width, opacity } = props as {
              height: number;
              width: number;
              opacity: number;
            };
            const index = item.position;
            return (
              <GreenBubble
                key={key}
                style={{
                  transform: interpolate(
                    [height, width],
                    (height, r) =>
                      `translate3d(${150 * r * (index % 2) + 200}px,${
                        height + 80 * (index + 1)
                      }px,0) scale(${index % 2 ? 1.5 : item.size})`
                  ),
                  opacity: opacity,
                }}
              >
                {item.key}
              </GreenBubble>
            );
          })}
        </div>
      </Flex>

      <style jsx>{`
        .container {
          width: 50%;
          height: 100%;
        }
      `}</style>
    </Wrapper>
  );
}

export default BubbleSections;
