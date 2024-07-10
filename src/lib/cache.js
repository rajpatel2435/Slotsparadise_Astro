// cache.js
import NodeCache from "node-cache";

const cache = new NodeCache({ stdTTL: 2  }); // 1 hour



export const getCachedData = (key) => {
  return cache.get(key);
};

export const setCachedData = (key, value) => {
  cache.set(key, value);
};

