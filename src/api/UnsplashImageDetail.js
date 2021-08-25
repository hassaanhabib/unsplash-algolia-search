import axios from "axios";

const API_CLIENTID = process.env.NEXT_UNSPLASH_PUBLIC_API_CLIENTID;

const config = (apiKey, imageId) => ({
  method: "GET",
  url: `https://api.unsplash.com/photos/${imageId}?client_id=${apiKey}`,
  header: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
  },
});

export const searchSpecificImage = async (imageId) => {
  return axios(config(API_CLIENTID, imageId));
};
