import { Box, HStack, Icon, Text } from "@chakra-ui/react";

import { RiFacebookBoxFill } from "react-icons/ri";

const Footer: React.FC = () => {
  return (
    <Box
      mt={"56"}
      display={"flex"}
      justifyContent={"center"}
      color={"white"}
      as="footer"
    >
      <HStack>
        <Icon as={RiFacebookBoxFill} />
      </HStack>
      <Text>Footer Content</Text>
    </Box>
  );
};

export default Footer;
