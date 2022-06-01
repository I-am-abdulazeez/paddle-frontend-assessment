import { Button, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({
  cardButton,
  cardText,
  cardButtonColorScheme,
  cardTopic,
  cardLinkTo,
}) => {
  return (
    <VStack
      p={6}
      borderRadius="lg"
      border={"1px solid #EDF2F7"}
      shadow={"md"}
      spacing={5}
    >
      <Text fontSize={"xl"} fontWeight="medium">
        {cardText}
      </Text>
      <Text>{cardTopic}</Text>
      <Link to={cardLinkTo}>
        <Button size={"sm"} colorScheme={cardButtonColorScheme || "purple"}>
          {cardButton}
        </Button>
      </Link>
    </VStack>
  );
};

export default Card;
