import { ReactElement } from "react";
import { Box } from "@chakra-ui/core";
import DecorationSVG from "./svgs/decoration.svg";
import theme from "@/src/theme";

function Decoration(props: {
  viewPortFactor: number;
  side: string;
}): ReactElement {
  return (
    <>
      <Box
        position="absolute"
        {...(props.side === "left"
          ? { left: -theme.decorationOffset.x }
          : { right: -theme.decorationOffset.x, transform: "rotate(180deg)" })}
        top={`calc(${props.viewPortFactor * 100}vh - ${
          theme.decorationOffset.y
        }px)`}
        display={["none", "none", "block"]}
      >
        <DecorationSVG />
      </Box>
    </>
  );
}

export default Decoration;
