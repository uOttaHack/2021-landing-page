import { ReactElement } from "react";
import { Box } from "@chakra-ui/core";
import constants from "@/src/constants";

function Wrapper(
  props: React.PropsWithChildren<React.ReactNode>
): ReactElement {
  return (
    <>
      <Box paddingX={constants.paddingX} maxWidth="1640px" margin="0 auto">
        {props.children}
      </Box>
    </>
  );
}

export default Wrapper;
