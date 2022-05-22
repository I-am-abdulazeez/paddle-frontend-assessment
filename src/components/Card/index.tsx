import { Box, Button, Text, VStack } from "@chakra-ui/react";

type CardProps = {
  cardText: string;
  cardButton: string;
  buttonColorScheme?: string;
};

const Card: React.FC<CardProps> = ({
  cardButton,
  cardText,
  buttonColorScheme,
}) => {
  return (
    <VStack
      p={6}
      borderRadius="lg"
      border={"1px solid #EDF2F7"}
      shadow={"md"}
      spacing={5}
    >
      <Text fontSize={"lg"} fontWeight="medium">
        {cardText}
      </Text>
      <Button size={"sm"} colorScheme={buttonColorScheme || "purple"}>
        {cardButton}
      </Button>
    </VStack>
  );
};

export default Card;
