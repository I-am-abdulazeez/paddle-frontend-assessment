import {
  Badge,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  chakra,
} from "@chakra-ui/react";
import { kFormatter } from "../../contants";
import { GithubRepoCardProps } from "../../interfaces";

const GithubRepoCard: React.FC<GithubRepoCardProps> = ({ repo }) => {
  const headingSize = useBreakpointValue({ base: "sm", sm: "md" });
  // How to get Day interval
  const createdAt = new Date(repo?.created_at);
  const today = new Date();
  const diff = Math.abs(createdAt.getTime() - today.getTime());
  const daysInterval = Math.ceil(diff / (1000 * 3600 * 24));

  return (
    <HStack
      p={4}
      borderRadius="lg"
      border="1px solid #EDF2F7"
      shadow="sm"
      my={7}
      spacing={8}
      borderRight="2px solid #7928CA"
    >
      <Image
        boxSize="70px"
        objectFit="cover"
        border="1px solid #EDF2F7"
        borderRadius="full"
        src={repo?.owner?.avatar_url}
        alt={repo?.full_name}
      />
      <Stack spacing={3}>
        <Heading size={headingSize}>{repo?.name}</Heading>
        <Text fontSize={{ base: "xs", md: "initial" }}>
          {repo?.description}
        </Text>
        <HStack spacing={4}>
          <Badge fontSize={{ base: "xs", md: "sm" }} colorScheme="purple">
            Stars: {kFormatter(repo?.stargazers_count)}
          </Badge>
          <Badge fontSize={{ base: "xs", md: "sm" }} colorScheme="pink">
            Issues: {kFormatter(repo?.open_issues_count)}
          </Badge>
        </HStack>
        <Text fontSize={{ base: "xs", md: "sm" }} fontStyle={"italic"}>
          Submitted {daysInterval} days ago by{" "}
          <chakra.span fontWeight={"semibold"}>{repo?.name}</chakra.span>
        </Text>
      </Stack>
    </HStack>
  );
};

export default GithubRepoCard;
