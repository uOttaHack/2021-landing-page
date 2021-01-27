import { ReactElement, useState } from "react";
import { Accordion, Box } from "@chakra-ui/core";
import FAQItem from "@/components/FAQItem";
import { FAQData } from "@/src/data";
import { HeadlineAuto } from "@/components/core/Text";
import Wrapper from "@/components/Wrapper";
import { LocationHashEnum, styles } from "@/src/constants";

function FAQ(): ReactElement {
  const [currentIndex, setCurrentIndex] = useState(-1);

  return (
    <div id={LocationHashEnum.FAQ}>
      <Wrapper>
        <Box
          marginTop={[
            styles.sectionTopMargin,
            styles.sectionTopMargin,
            "2.2in",
          ]}
        >
          <HeadlineAuto marginBottom="40px">
            Frequently Asked
            <br />
            Questions
          </HeadlineAuto>
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
    </div>
  );
}

export default FAQ;
