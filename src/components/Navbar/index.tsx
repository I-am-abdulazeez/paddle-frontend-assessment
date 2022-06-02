import {
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

import Logo from "../../images/logo.svg";

const Navbar: React.FC = () => {
  const buttonSize = useBreakpointValue({ base: "xs", md: "sm" });

  return (
    <Container maxW={["", "container.lg"]}>
      <Flex justify={"space-between"}>
        <VStack spacing={-2}>
          <Image boxSize={["8", "10"]} src={Logo} alt="Dan Abramov" />
          <Text
            fontWeight={"semibold"}
            color={"#fff"}
            textTransform="uppercase"
            fontSize={["12px", "sm"]}
          >
            Metricks
          </Text>
        </VStack>
        <HStack spacing={[4, 7]}>
          <Button
            color="white"
            variant={"ghost"}
            rounded={"full"}
            size={buttonSize}
            _active={{
              bgColor: "transparent",
            }}
            _hover={{
              bgColor: "transparent",
            }}
            fontWeight="medium"
            textTransform="uppercase"
            fontSize={"xs"}
          >
            About
          </Button>
          <Button
            rounded={"full"}
            _active={{
              bgColor: "transparent",
            }}
            _hover={{
              bgColor: "transparent",
            }}
            variant={"ghost"}
            size={buttonSize}
            textTransform="uppercase"
            fontWeight="medium"
            color="white"
            fontSize={"xs"}
          >
            Blog
          </Button>
          <Button
            rounded={"full"}
            _hover={{
              bgColor: "#271AC1",
            }}
            _active={{
              bgColor: "#271AC1",
            }}
            size={buttonSize}
            p={5}
            textTransform="uppercase"
            bgColor={"#271AC1"}
            fontWeight="medium"
            color="white"
            fontSize={"xs"}
          >
            Contact us
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
