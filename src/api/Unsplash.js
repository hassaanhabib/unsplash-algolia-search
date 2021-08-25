import axios from "axios";

const API_CLIENTID = process.env.NEXT_UNSPLASH_PUBLIC_API_CLIENTID;

const config = (apiKey, imageTitle, pageNumber) => ({
  method: "GET",
  url: `https://api.unsplash.com/search/photos?page=${pageNumber}&per_page=20&client_id=${apiKey}&query=${imageTitle}`,
  header: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
  },
});

export const searchImages = async (title, pageNumber) => {
  return axios(config(API_CLIENTID, title, pageNumber));
};
