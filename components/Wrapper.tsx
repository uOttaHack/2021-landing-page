import { ReactElement } from "react";
import { Box } from "@chakra-ui/core";
import theme from "@/src/theme";

interface Props {}

function Wrapper(props: React.PropsWithChildren<Props>): ReactElement {
  return (
    <>
      <Box
        paddingX={theme.paddingX}
        maxWidth={theme.maxWidth}
        margin={theme.margin}
      >
        {props.children}
      </Box>
    </>
  );
}

export default Wrapper;
