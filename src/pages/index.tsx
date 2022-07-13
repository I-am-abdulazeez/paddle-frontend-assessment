import { Center, VStack, Heading, Stack, Text } from "@chakra-ui/react";

import Card from "../components/Card";

const Home: React.FC = () => {
  return (
    <Center height={"100vh"} p={{ base: 5, md: 0 }}>
      <VStack spacing={10} textAlign="center">
        <Heading
          size={"xl"}
          bgClip="text"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
        >
          Welcome to <Text mt={2}>Peddle-Frontend-Assessment</Text>
        </Heading>
        <Stack direction={{ base: "column", md: "row" }} spacing={5}>
          <Card
            cardTopic="Design a  Comming soon page / Conatct us page."
            cardButton="Coming soon page"
            cardText="Peddle Assessment Task 1"
            cardLinkTo="/comingsoon"
          />
          <Card
            cardTopic="Using Github API to display latest repo from the last 30days."
            cardButton="Github data page"
            cardText="Peddle Assessment Task 2"
            cardButtonColorScheme="pink"
            cardLinkTo="/github"
          />
        </Stack>
      </VStack>
    </Center>
  );
};

export default Home;
