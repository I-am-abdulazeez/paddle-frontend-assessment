import { HStack, Text, VStack } from "@chakra-ui/react";

import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <VStack spacing={5} justifyContent={"center"} color={"white"} as="footer">
      <HStack spacing={7}>
        <RiYoutubeFill size={"25px"} />
        <RiFacebookBoxFill size={"25px"} color="#A0AEC0" />
        <RiLinkedinBoxFill size={"25px"} color="#A0AEC0" />
        <RiInstagramFill size={"25px"} color="#A0AEC0" />
        <RiTwitterFill size={"25px"} color="#A0AEC0" />
      </HStack>
      <HStack spacing={6} fontSize={"sm"} color="#A0AEC0">
        <Link to="#">Terms of services</Link>
        <Link to="#">Privacy policy</Link>
      </HStack>
      <Text textAlign={"center"} color="#A0AEC0" fontSize={"sm"}>
        Copyright {new Date().getFullYear()} @ Peddle Technologies. All Rights
        Reserved.
      </Text>
    </VStack>
  );
};

export default Footer;
