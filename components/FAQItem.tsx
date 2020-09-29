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
  currentQuestion: string;
  setCurrentQuestion: Dispatch<SetStateAction<string>>;
}): ReactElement {
  const isOpen = props.question === props.currentQuestion;

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
            props.setCurrentQuestion(
              props.currentQuestion === props.question ? "" : props.question
            )
          }
          borderLeft={`4px solid ${isOpen ? highlightColor : "transparent"}`}
          padding="12px 24px"
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
          <Body2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Body2>
        </AccordionPanel>
      </AccordionItem>
    </>
  );
}

export default FAQItem;
