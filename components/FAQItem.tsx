import { Dispatch, ReactElement, SetStateAction } from "react";
import styled from "@emotion/styled";
import {
  AccordionItem,
  AccordionHeader,
  AccordionIcon,
  AccordionPanel,
  Box,
} from "@chakra-ui/core";
import { Headline } from "@/components/core/Text";
import ReactMarkdown from "react-markdown";
import theme from "@/src/theme";

const HeaderText = styled(Headline)`
  font-size: 16px;
`;

const highlightColor = "#28e6a4";

const Markdown = styled(ReactMarkdown)`
  * {
    font-family: Inter;
    font-size: 14px;
    color: ${theme.colors.brand.background_on};
  }

  a {
    color: ${theme.colors.brand.primary};

    &:hover {
      color: ${theme.colors.brand.primary_variant};
      text-decoration: underline;
    }
  }
`;

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
          <Markdown>{props.answer}</Markdown>
        </AccordionPanel>
      </AccordionItem>
    </>
  );
}

export default FAQItem;
