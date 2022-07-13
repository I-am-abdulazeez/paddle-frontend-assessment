export const GITHUB_API_URL = import.meta.env.VITE_GITHUB_API_URL;

export const fetchRepoData = async (page: number = 1) => {
  const res = await fetch(
    `${GITHUB_API_URL}q=created:%3E2022-06-13&sort=stars&order=desc&per_page=20&page=${page}`
  );
  return res.json();
};

export const kFormatter = (num: number) => {
  return num > 999
    ? num % 1000 === 0
      ? (num / 1000).toFixed(0) + "k"
      : (num / 1000).toFixed(1) + "k"
    : num;
};
