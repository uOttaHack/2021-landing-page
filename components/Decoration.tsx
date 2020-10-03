import { ReactElement } from "react";
import { Box, BoxProps } from "@chakra-ui/core";
import DecorationSVG from "./svgs/decoration.svg";

const decorationOffsetX = 191;
const decorationOffsetY = 202;

function Decoration(props: {
  horizontalAlign: string;
  verticalAlign: string;
}): ReactElement {
  const properties: BoxProps = {};

  if (props.horizontalAlign === "left") {
    properties.left = -decorationOffsetX;
  } else if (props.horizontalAlign === "right") {
    properties.right = -decorationOffsetX;
    properties.transform = "rotate(180deg)";
  }

  if (props.verticalAlign === "top") {
    properties.top = -decorationOffsetY;
  } else if (props.verticalAlign === "bottom") {
    properties.bottom = -decorationOffsetY;
  }

  return (
    <>
      <Box
        position="absolute"
        display={["none", "none", "block"]}
        zIndex={-1}
        {...properties}
      >
        <DecorationSVG />
      </Box>
    </>
  );
}

export default Decoration;
