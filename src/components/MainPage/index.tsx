import {
  Box,
  Heading,
  chakra,
  Center,
  Text,
  Stack,
  HStack,
  Input,
  Button,
} from "@chakra-ui/react";
import ClockCard from "../ClockCard";

const MainPage: React.FC = () => {
  return (
    <Box as="main" textAlign={"center"} mt={"5rem"} color="white">
      <Heading size={"xl"}>SOMETHING AWESOME IS</Heading>
      <Heading size={"xl"} mt={3}>
        COMING SOON
      </Heading>
      <Text mt={6} fontSize="sm" fontWeight="light">
        You are all in one affiliate marketing tracking software{" "}
        <chakra.span fontWeight={"medium"}>track, automate</chakra.span> and
      </Text>
      <Text fontSize="sm" fontWeight="light">
        {" "}
        <chakra.span fontWeight={"medium"}>optimize</chakra.span> your campaign
      </Text>
      <Center>
        <Stack spacing={6} mt={6} direction={["column", "row"]}>
          <ClockCard cardTime="7" cardTag="Days" />
          <ClockCard cardTime="24" cardTag="Hours" />
          <ClockCard cardTime="54" cardTag="Minutes" />
          <ClockCard cardTime="11" cardTag="Seconds" />
        </Stack>
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
      <Center mt={7}>
        <HStack spacing={-50}>
          <Input
            bgColor={"white"}
            borderRadius="full"
            p={5}
            placeholder="Last name"
            width="400px"
          />
          <Button textTransform={"uppercase"}>Join our waiting list</Button>
        </HStack>
      </Center>
    </Box>
  );
};

export default MainPage;
