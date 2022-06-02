import { Box, Container, Heading, Text } from "@chakra-ui/react";

import { useQuery } from "react-query";
import axios from "axios";

import { GITHUB_API_URL } from "../contants";

const fetchRepoData = async () => {
  const res = await axios.get(GITHUB_API_URL);
  return res.data;
};

const Github: React.FC = () => {
  const { data } = useQuery("repoData", fetchRepoData);
  return (
    <Container mt={3} maxW="container.lg">
      <Heading size={"lg"} textAlign={"center"}>
        Trending Github Repos
      </Heading>
    </Container>
  );
};

export default Github;
