import { URL_POSTS } from "./constants";

const getPosts = async () => {
  const response = await fetch(URL_POSTS);
  const data = await response.json();

  //console.log(data);

  return data;
};

export { getPosts };
