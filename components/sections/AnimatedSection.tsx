import { ReactElement, useEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/core";
import { clamp } from "@/src/utils";
import TeamMessage from "@/components/sections/TeamMessage";
import BubbleSections from "@/components/sections/BubbleSections";
import { animated, useTransition } from "react-spring";
import styled from "@emotion/styled";
import { LocationHashEnum } from "@/src/constants";

const AnimatedContainer = styled(animated.div)`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`;

function AnimatedSection(
  props: React.PropsWithChildren<React.ReactNode>
): ReactElement {
  const ref = useRef();
  const [onFirstBubble, setOnFirstBubble] = useState(true);
  const [isAnimated, setIsAnimated] = useState(false);
  const [onBubbles, setOnBubbles] = useState(false);

  useEffect(() => {
    const elem = ref.current as HTMLDivElement | undefined;
    // TODO: criteria for using animated version (use window.innerWidth and window.innerHeight?)
    // or make responsive if possible
    setIsAnimated(true);

    const onScroll = () => {
      if (elem) {
        const elemPos = elem.getBoundingClientRect().top;
        const elemHeight = elem.offsetHeight;
        const scrollPos = window.scrollY + window.innerHeight;

        const progressUnitInterval = clamp(
          (scrollPos - elemPos) / 2 / elemHeight,
          0,
          1
        );

        setOnBubbles(progressUnitInterval > 0.5);
        setOnFirstBubble(progressUnitInterval < 0.75);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transitions = useTransition(onBubbles, null, {
    from: {
      transform: "translate3d(0,-40px,0)",
      opacity: 0,
    },
    enter: { transform: "translate3d(0,0px,0)", opacity: 1 },
    leave: { transform: "translate3d(0,-40px,0)", opacity: 0 },
  });

  return (
    <Box ref={ref}>
      {isAnimated ? (
        <Box position="relative" height="300vh">
          <Box id={LocationHashEnum.About} />
          <Box
            position="sticky"
            top="0px"
            width="100%"
            height="100vh"
            overflow="hidden"
          >
            {transitions.map(({ item, key, props }) =>
              item ? (
                <AnimatedContainer key={key} style={props}>
                  <BubbleSections onFirst={onFirstBubble} />
                </AnimatedContainer>
              ) : (
                <AnimatedContainer key={key} style={props}>
                  <TeamMessage />
                </AnimatedContainer>
              )
            )}
          </Box>
        </Box>
      ) : (
        <Box marginY="8em">{props.children}</Box>
      )}
    </Box>
  );
}

export default AnimatedSection;
