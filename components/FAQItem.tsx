import { Dispatch, ReactElement, SetStateAction } from "react";
import styled from "@emotion/styled";
import {
  AccordionItem,
  AccordionHeader,
  AccordionIcon,
  AccordionPanel,
  Box,
} from "@chakra-ui/core";
import { Headline, Body2 } from "@/components/core/Text";

const HeaderText = styled(Headline)`
  font-size: 16px;
`;

const highlightColor = "#28e6a4";

function FAQItem(props: {
  question: string;
  answer: string;
  index: number;
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}): ReactElement {
  const isOpen = props.index === props.currentIndex;

  return (
    <>
      <AccordionItem
        isOpen={isOpen}
        background="#f7f7f7"
        marginBottom="12px"
        border="none"
        borderRadius="4px"
        overflow="hidden"
      >
        <AccordionHeader
          onClick={() =>
            props.setCurrentIndex(
              props.currentIndex === props.index ? -1 : props.index
            )
          }
          borderLeft={`4px solid ${isOpen ? highlightColor : "transparent"}`}
          paddingTop={isOpen ? "24px" : "12px"}
          paddingBottom="12px"
          paddingX="24px"
          _hover={{ borderLeft: `4px solid ${highlightColor}` }}
          _focus={{}}
        >
          <Box flex="1" textAlign="left">
            <HeaderText>{props.question}</HeaderText>
          </Box>
          <AccordionIcon fontSize="28px" />
        </AccordionHeader>
        <AccordionPanel
          borderLeft={`4px solid ${highlightColor}`}
          padding="0px 24px 28px 24px"
        >
          <Body2>{props.answer}</Body2>
        </AccordionPanel>
      </AccordionItem>
    </>
  );
}

export default FAQItem;
