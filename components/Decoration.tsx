import { ReactElement } from "react";
import { Box } from "@chakra-ui/core";
import DecorationSVG from "./svgs/decoration.svg";
import theme from "@/src/theme";

function Decoration(props: {
  horizontalAlign: string;
  verticalAlign: string;
}): ReactElement {
  return (
    <>
      <Box
        position="absolute"
        {...(props.horizontalAlign === "left"
          ? { left: -theme.decorationOffset.x }
          : props.horizontalAlign === "right"
          ? { right: -theme.decorationOffset.x, transform: "rotate(180deg)" }
          : {})}
        {...(props.verticalAlign === "top"
          ? { top: -theme.decorationOffset.y }
          : props.verticalAlign === "bottom"
          ? { bottom: -theme.decorationOffset.y }
          : {})}
        display={["none", "none", "block"]}
      >
        <DecorationSVG />
      </Box>
    </>
  );
}

export default Decoration;
