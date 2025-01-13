export const BASE_LANGUAGE = "nl";

export const ROUTES = {
  COLLECTION: "collection",
};

export const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/${BASE_LANGUAGE}/${ROUTES.COLLECTION}`;

export const PARAM_KEY = `key=${process.env.NEXT_PUBLIC_API_KEY}`;

export const headers = {
  Accept: "*/*",
  "Accept-Profile": "*",
  "Content-Type": "application/json",
};
