import { ReactElement, useState } from "react";
import { Accordion, Box } from "@chakra-ui/core";
import FAQItem from "@/components/FAQItem";
import { FAQData } from "@/src/data";
import { Headline4 } from "@/components/core/Text";

function FAQ(): ReactElement {
  const [currentQuestion, setCurrentQuestion] = useState("");

  return (
    <>
      <Headline4 lineHeight="110%" marginBottom="40px">
        Frequently Asked <br /> Questions
      </Headline4>
      <Accordion>
        {FAQData.map((faqItem) => (
          <Box key={faqItem.question}>
            <FAQItem
              {...faqItem}
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
            />
          </Box>
        ))}
      </Accordion>
    </>
  );
}

export default FAQ;
