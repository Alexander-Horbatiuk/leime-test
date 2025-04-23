import { useEffect, useState } from "react";

import { getMemes, saveMemes } from "../utils/meme-storage.js";
export const useMemes = () => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const localMemes = getMemes();

    if (localMemes.length === 0) {
      fetch("https://api.imgflip.com/get_memes")
        .then((res) => res.json())
        .then((data) => {
          const mapped = data.data.memes
            .filter((meme) =>
              /\.(jpg|jpeg|png|gif|webp)(\?.*)?$/.test(meme.url),
            )
            .slice(0, 10)
            .map((meme, index) => ({
              id: index + 1,
              name: meme.name,
              image: meme.url,
              likes: Math.floor(Math.random() * 100),
            }));

          saveMemes(mapped);
          setMemes(mapped);
          setLoading(false);
        });
    } else {
      setMemes(localMemes);
      setLoading(false);
    }
  }, []);

  return { memes, loading };
};
