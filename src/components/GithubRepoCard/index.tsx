import {
  Badge,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { GithubRepoCardProps } from "../../interfaces";

const GithubRepoCard: React.FC<GithubRepoCardProps> = ({ item }) => {
  const headingSize = useBreakpointValue({ base: "sm", sm: "md" });
  return (
    <HStack
      p={4}
      borderRadius="lg"
      border="1px solid #EDF2F7"
      shadow="sm"
      my={7}
      spacing={8}
    >
      <Image
        boxSize="70px"
        objectFit="cover"
        border="1px solid #EDF2F7"
        borderRadius="full"
        src={item?.owner?.avatar_url}
        alt={item?.full_name}
      />
      <Stack spacing={3}>
        <Heading size={headingSize}>{item.name}</Heading>
        <Text>{item?.description}</Text>
        <HStack spacing={4}>
          <Badge fontSize={"md"} colorScheme="purple">
            Stars: {item?.stargazers_count}
          </Badge>
          <Badge fontSize={"md"} colorScheme="pink">
            Stars: {item?.open_issues_count}
          </Badge>
        </HStack>
      </Stack>
    </HStack>
  );
};

export default GithubRepoCard;
