import { Box, Button, Text, VStack } from "@chakra-ui/react";

type CardProps = {
  cardText: string;
  cardButton: string;
  cardButtonColorScheme?: string;
  cardTopic: string;
};

const Card: React.FC<CardProps> = ({
  cardButton,
  cardText,
  cardButtonColorScheme,
  cardTopic,
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
      <Button size={"sm"} colorScheme={cardButtonColorScheme || "purple"}>
        {cardButton}
      </Button>
    </VStack>
  );
};

export default Card;
