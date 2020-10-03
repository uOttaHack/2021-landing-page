import { ReactElement } from "react";
import { Box } from "@chakra-ui/core";

export interface Props {
  enablePaddingX: boolean;
  enableAutoMargins: boolean;
}

function Wrapper(props: React.PropsWithChildren<Props>): ReactElement {
  return (
    <>
      <Box
        paddingX={
          props.enablePaddingX
            ? ["0.25in", "0.5in", "0.75in", "1.25in"]
            : "none"
        }
        maxWidth="1640px"
        margin={props.enableAutoMargins ? "0 auto" : "none"}
      >
        {props.children}
      </Box>
    </>
  );
}

Wrapper.defaultProps = {
  enablePaddingX: true,
  enableAutoMargins: true,
} as Partial<Props>;

export default Wrapper;
