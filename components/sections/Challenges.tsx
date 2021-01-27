import { ReactElement } from "react";
import { LocationHashEnum, styles } from "@/src/constants";
import { Box, Grid } from "@chakra-ui/core";
import Wrapper from "@/components/Wrapper";
import { HeadlineAuto } from "@/components/core/Text";
import ChallengeItem, { IChallengeItem } from "@/components/ChallengeItem";

import CommunityIcon from "../svgs/community.svg";
import EducationIcon from "../svgs/education.svg";
import HeartIcon from "../svgs/heartbeat.svg";
import ShopIcon from "../svgs/shop.svg";

const challenges: IChallengeItem[] = [
  {
    title: "Health",
    description: `Investigate anything from preventative/hygiene behaviours, supporting frontline workers, treatment and diagnosis development, virtual healthcare, and more.`,
    Icon: HeartIcon,
  },
  {
    title: "Education",
    description: `Look at creative methods of delivering remote learning to students of all ages and aiding teachers/schools in the process.`,
    Icon: EducationIcon,
  },
  {
    title: "Community",
    description: `Produce innovative and creative solutions to combat the negative impacts on mental health and promote safe ways to be social within our communities.`,
    Icon: CommunityIcon,
  },
  {
    title: "Business",
    description: `Assemble a solution revolving around anything from the supply chain, e-commerce, retail logistics, and more.`,
    Icon: ShopIcon,
  },
];

function Challenges(): ReactElement {
  return (
    <Box
      id={LocationHashEnum.Challenges}
      marginTop={[styles.sectionTopMargin, styles.sectionTopMargin, "2in"]}
    >
      <Wrapper>
        <HeadlineAuto marginBottom={["2rem", "2rem", "3rem"]}>
          Challenges
        </HeadlineAuto>
        <Grid
          gridTemplateColumns={["1fr", "1fr", "1fr", "1fr", "1fr 1fr"]}
          gap="2rem 4rem"
        >
          {challenges.map((challenge) => (
            <ChallengeItem key={challenge.title} {...challenge} />
          ))}
        </Grid>
      </Wrapper>
    </Box>
  );
}

export default Challenges;
