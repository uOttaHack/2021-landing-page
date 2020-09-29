import { ReactElement, useState } from "react";
import { Accordion, Box } from "@chakra-ui/core";
import FAQItem from "@/components/FAQItem";
import { FAQData } from "@/src/data";

function FAQ(): ReactElement {
  const [currentQuestion, setCurrentQuestion] = useState("");

  return (
    <>
      <Accordion allowToggle>
        {FAQData.map((faqItem) => (
          <Box
            key={faqItem.question}
            onClick={() =>
              setCurrentQuestion(
                currentQuestion === faqItem.question ? "" : faqItem.question
              )
            }
          >
            <FAQItem {...faqItem} currentQuestion={currentQuestion} />
          </Box>
        ))}
      </Accordion>
    </>
  );
}

export default FAQ;
