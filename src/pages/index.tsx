import { Center, VStack, Heading, Stack, Text } from "@chakra-ui/react";

import Card from "../components/Card";

const Home: React.FC = () => {
  return (
    <Center height={"100vh"} p={{ base: 5, md: 0 }}>
      <VStack spacing={10} textAlign="center">
        <Heading
          size={"2xl"}
          bgClip="text"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
        >
          Welcome to <Text mt={3}>Paddle-Frontend-Assessment</Text>
        </Heading>
        <Stack direction={["column", "row"]} spacing={5}>
          <Card
            cardTopic="Design a landing page / Contact page"
            cardButton="Go to task 1"
            cardText="Paddle Assessment Task 1"
          />
          <Card
            cardTopic="Use Github API to display latest repo from the last 30days"
            cardButton="Go to task 2"
            cardText="Paddle Assessment Task 2"
            cardButtonColorScheme="pink"
          />
        </Stack>
      </VStack>
    </Center>
  );
};

export default Home;
