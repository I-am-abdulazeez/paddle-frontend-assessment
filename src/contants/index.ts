import axios from "axios";

export const GITHUB_API_URL =
  "https://api.github.com/search/repositories?q=created:>2022-05-02&sort=stars&order=desc&page=2";

export const fetchRepoData = async () => {
  const res = await axios.get(GITHUB_API_URL);
  return res.data;
};
