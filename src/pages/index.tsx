import { Center, VStack, Heading, HStack } from "@chakra-ui/react";
import Card from "../components/Card";

const Home: React.FC = () => {
  return (
    <Center height={"100vh"}>
      <VStack spacing={7}>
        <Heading
          size={"lg"}
          bgClip="text"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
        >
          Welcome to Paddle-Frontend-Assessment
        </Heading>
        <HStack spacing={5}>
          <Card cardButton="Go to task 1" cardText="Paddle Assessment Task 1" />
          <Card
            cardButton="Go to task 2"
            cardText="Paddle Assessment Task 2"
            buttonColorScheme="pink"
          />
        </HStack>
      </VStack>
    </Center>
  );
};

export default Home;
