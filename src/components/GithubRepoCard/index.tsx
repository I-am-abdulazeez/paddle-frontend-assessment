import { HStack, Image } from "@chakra-ui/react";
import { GithubRepoCardProps } from "../../interfaces";

const GithubRepoCard: React.FC<GithubRepoCardProps> = ({ item }) => {
  return (
    <HStack
      p={4}
      borderRadius="lg"
      border="1px solid #EDF2F7"
      shadow="sm"
      my={5}
      key={item.id}
    >
      <Image
        boxSize="70px"
        objectFit="cover"
        borderRadius="full"
        src={item?.owner?.avatar_url}
        alt={item?.full_name}
      />
    </HStack>
  );
};

export default GithubRepoCard;
