import {
  Box,
  Center,
  Container,
  Heading,
  HStack,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";

import { useQuery } from "react-query";
import GithubRepoCard from "../components/GithubRepoCard";
import { fetchRepoData } from "../contants";

const Github: React.FC = () => {
  const { data, isLoading } = useQuery("repoData", fetchRepoData);
  console.log(data?.items);
  return (
    <Container maxW="container.lg">
      <Heading my={10} size={"lg"} textAlign={"center"}>
        Trending Github Repos
      </Heading>
      <Center mt={4}>
        {isLoading && (
          <Spinner thickness="3px" emptyColor="gray.200" color="pink.500" />
        )}
      </Center>
      {data?.items?.map((item: any) => (
        <GithubRepoCard item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Github;
