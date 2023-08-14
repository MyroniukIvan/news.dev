import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.spaceflightnewsapi.net/v3/",
});

export const fetchCards = async (limit: number = 52) => {
  try {
    const response = await instance.get(`/articles?_limit=${limit}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch cards");
  }
};
