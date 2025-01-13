import dotenv from "dotenv";

dotenv.config();

export const BASE_LANGUAGE = "nl";

export const API_ROUTES = {
  COLLECTION: "collection",
};
console.log(process.env.API_URL);

export const API_BASE_URL = `${process.env.API_URL}/${BASE_LANGUAGE}/${API_ROUTES.COLLECTION}`;

export const API_STR_KEY = `key=${process.env.API_KEY}`;
