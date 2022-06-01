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
        COMING SOON
      </Heading>
      <Text mt={6} fontSize="sm" fontWeight="light">
        You are all in one affiliate marketing tracking software{" "}
        <chakra.span fontWeight={"medium"}>track, automate</chakra.span> and
        <br />
        <chakra.span fontWeight={"medium"}>optimize</chakra.span> your campaign.
      </Text>
      <Center>
        <SimpleGrid spacing={6} columns={{ base: 2, md: 4 }} mt={6}>
          <ClockCard cardTime="7" cardTag="Days" />
          <ClockCard cardTime="24" cardTag="Hours" />
          <ClockCard cardTime="54" cardTag="Minutes" />
          <ClockCard cardTime="11" cardTag="Seconds" />
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
            width="auto"
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
            width="auto"
          />
        </HStack>
      </Center>
      <Center mt={"3rem"}>
        <HStack
          borderRadius="full"
          p={1}
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
            border="none"
            color={"#000000"}
          />
          <Button
            rounded={"full"}
            bgColor="red"
            size={buttonSize}
            _hover={{
              bgColor: "red",
            }}
            _active={{
              bgColor: "red",
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
