import {
  Box,
  Heading,
  chakra,
  Center,
  Text,
  HStack,
  Input,
  Button,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";
import ClockCard from "../ClockCard";

const MainPage: React.FC = () => {
  const buttonSize = useBreakpointValue({ base: "sm", md: "md" });
  return (
    <Box as="main" textAlign={"center"} mt={"5rem"} color="white">
      <Heading size={"xl"}>
        SOMETHING AWESOME IS <br />
        <chakra.p mt={2}>COMING SOON</chakra.p>
      </Heading>
      <Text mt={6} fontSize="sm" fontWeight="light">
        You are all in one affiliate marketing tracking software{" "}
        <chakra.span fontWeight={"medium"}>track, automate</chakra.span> and
        <br />
        <chakra.span fontWeight={"medium"}>optimize</chakra.span> your campaign.
      </Text>
      <Center>
        <SimpleGrid spacing={6} columns={{ base: 2, md: 4 }} mt={8}>
          <ClockCard cardIsAllRounded cardTime="7" cardTag="Days" />
          <ClockCard cardIsAllRounded cardTime="24" cardTag="Hours" />
          <ClockCard cardIsAllRounded cardTime="54" cardTag="Minutes" />
          <ClockCard cardIsAllRounded={false} cardTime="11" cardTag="Second" />
        </SimpleGrid>
      </Center>
      <Center mt="3rem">
        <HStack spacing={4}>
          <Input
            border="0px"
            borderRadius={"0px"}
            borderBottom={"1px"}
            placeholder="First name"
            fontSize={"xs"}
            _focus={{
              boxShadow: "none",
            }}
          />
          <Input
            border="0px"
            borderRadius={"0px"}
            borderBottom={"1px"}
            placeholder="Last name"
            fontSize={"xs"}
            _focus={{
              boxShadow: "none",
            }}
          />
        </HStack>
      </Center>
      <Center mt={"3rem"}>
        <HStack
          borderRadius="full"
          width={{ base: "100%", md: "50%" }}
          bgColor="white"
        >
          <Input
            bgColor={"transparent"}
            placeholder="Last name"
            _focus={{
              boxShadow: "none",
            }}
            width="300px"
            fontSize={"sm"}
            border="none"
            color={"#000000"}
          />
          <Button
            rounded={"full"}
            bgColor="#271AC1"
            size={buttonSize}
            _hover={{
              bgColor: "#271AC1",
            }}
            height={{ base: "3rem" }}
            _active={{
              bgColor: "#271AC1",
            }}
            width={{ base: "270px", md: "auto" }}
            textTransform={"uppercase"}
            fontSize={{ base: "xs", md: "sm" }}
          >
            Join our waiting list
          </Button>
        </HStack>
      </Center>
    </Box>
  );
};

export default MainPage;
