import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import { MouseEventHandler } from "react";

import { useInfiniteQuery } from "react-query";
import GithubRepoCard from "../components/GithubRepoCard";
import { fetchRepoData } from "../contants";

const Github: React.FC = () => {
  const toast = useToast();
  const { data, isError, isLoading, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      ["repoData"],
      ({ pageParam = 1 }) => fetchRepoData(pageParam),
      {
        // for infinite Query
        keepPreviousData: true,
        onError: (error) => {
          const err = error as Error;
          toast({
            containerStyle: {
              fontSize: "12.5px",
            },
            isClosable: true,
            title: `${err.message}`,
          });
        },
        getNextPageParam: (lastPage, allPages) => {
          // get the max page first
          const maxPages = lastPage?.total_count / 30;
          const nextPage = allPages?.length + 1;
          // if nextPage is less than maxPages, return nextPage, else return Nothing
          return nextPage <= maxPages ? nextPage : undefined;
        },
      }
    );

  const handleLoadMore:
    | MouseEventHandler<HTMLButtonElement>
    | undefined = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <Box py={6}>
      <Container maxW="container.lg">
        <Heading my={10} size={"lg"} textAlign={"center"}>
          Trending Github Repos in the last 30 Days 💪💪💪
        </Heading>

        <Center mt={4}>
          {isFetching && (
            <Spinner thickness="3px" emptyColor="gray.200" color="pink.500" />
          )}
        </Center>

        <Center mt={4}>{isError && <Text>Error loading data...</Text>}</Center>
        {data?.pages &&
          data?.pages?.map((group: any) => {
            return group?.items?.map((repo: any) => {
              return <GithubRepoCard repo={repo} key={repo.id} />;
            });
          })}
        <Center mt={4}>
          {!isLoading && (
            <Button
              colorScheme={"purple"}
              isLoading={isFetching || !hasNextPage}
              size={"sm"}
              onClick={handleLoadMore}
            >
              Load More
            </Button>
          )}
        </Center>
      </Container>
    </Box>
  );
};

export default Github;
