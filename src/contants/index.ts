import axios from "axios";

export const GITHUB_API_URL = import.meta.env.VITE_GITHUB_API_URL;

export const fetchRepoData = async () => {
  const res = await axios.get(
    `${GITHUB_API_URL}q=created:%3E2022-05-02&sort=stars&order=desc`
  );
  return res.data;
};

export const kFormatter = (num: number) => {
  return num > 999
    ? num % 1000 === 0
      ? (num / 1000).toFixed(0) + "k"
      : (num / 1000).toFixed(1) + "k"
    : num;
};
