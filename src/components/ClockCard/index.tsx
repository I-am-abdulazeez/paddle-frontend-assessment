import { Box, Heading, Text } from "@chakra-ui/react";

import { ClockCardProps } from "../../interfaces";

const ClockCard: React.FC<ClockCardProps> = ({ cardTag, cardTime }) => {
  return (
    <Box
      p={6}
      textAlign="center"
      bgColor={"white"}
      color="#000"
      borderRadius="lg"
    >
      <Heading>{cardTime}</Heading>
      <Text>{cardTag}</Text>
    </Box>
  );
};

export default ClockCard;
