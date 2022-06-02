import { Box, Heading, Text } from "@chakra-ui/react";

import { ClockCardProps } from "../../interfaces";

const ClockCard: React.FC<ClockCardProps> = ({
  cardTag,
  cardTime,
  cardIsAllRounded,
}) => {
  return (
    <Box
      p={6}
      textAlign="center"
      bgColor={"white"}
      color="#000"
      borderRadius={cardIsAllRounded ? "lg" : "0.5rem 0 0 0.5rem"}
    >
      <Heading>{cardTime}</Heading>
      <Text fontWeight={"medium"}>{cardTag}</Text>
    </Box>
  );
};

export default ClockCard;
