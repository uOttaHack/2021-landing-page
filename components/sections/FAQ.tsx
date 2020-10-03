import { ReactElement, useState } from "react";
import { Accordion, Box } from "@chakra-ui/core";
import FAQItem from "@/components/FAQItem";
import { FAQData } from "@/src/data";
import { Headline4 } from "@/components/core/Text";
import Wrapper from "@/components/Wrapper";
import theme from "@/src/theme";

function FAQ(): ReactElement {
  const [currentIndex, setCurrentIndex] = useState(-1);

  return (
    <>
      <Wrapper>
        <Box marginTop={theme.marginTop}>
          <Headline4 lineHeight="110%" marginBottom="40px">
            Frequently Asked <br /> Questions
          </Headline4>
          <Accordion>
            {FAQData.map((faqItem, index) => (
              <Box key={index + faqItem.question}>
                <FAQItem
                  {...faqItem}
                  index={index}
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                />
              </Box>
            ))}
          </Accordion>
        </Box>
      </Wrapper>
    </>
  );
}

export default FAQ;
