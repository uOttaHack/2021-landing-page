import { ReactElement } from "react";
import theme from "@/src/theme";
import {
  AccordionItem,
  AccordionHeader,
  AccordionIcon,
  AccordionPanel,
  Box,
} from "@chakra-ui/core";

function FAQItem(props: {
  question: string;
  answer: string;
  currentQuestion: string;
}): ReactElement {
  const isOpen = props.question === props.currentQuestion;

  return (
    <>
      <AccordionItem
        isOpen={isOpen}
        borderLeft={isOpen ? `4px solid ${theme.colors.brand.primary}` : ""}
        marginLeft={isOpen ? 0 : "4px"}
      >
        <AccordionHeader _focus={{}}>
          <Box flex="1" textAlign="left">
            {props.question}
          </Box>
          <AccordionIcon />
        </AccordionHeader>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </>
  );
}

export default FAQItem;
