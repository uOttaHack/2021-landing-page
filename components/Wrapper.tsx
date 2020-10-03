import { ReactElement } from "react";
import { Box } from "@chakra-ui/core";

interface Props {}

function Wrapper(props: React.PropsWithChildren<Props>): ReactElement {
  return (
    <>
      <Box
        paddingX={["0.25in", "0.5in", "0.75in", "1.25in"]}
        maxWidth={"1640px"}
        margin={"0 auto"}
      >
        {props.children}
      </Box>
    </>
  );
}

export default Wrapper;
