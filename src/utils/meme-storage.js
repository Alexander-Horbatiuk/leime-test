import { defaultMemes } from "../memes.js";

const STORAGE_KEY = "memes";

export const getMemes = () => {
  const data = localStorage.getItem(STORAGE_KEY);

  return data ? JSON.parse(data) : defaultMemes;
};

export const saveMemes = (memes) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(memes));
};
