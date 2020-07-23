import { URL_COMMENTS_BY_POST_ID } from "./constants";

const getComments = async (idPost) => {
  const urlWithId = URL_COMMENTS_BY_POST_ID + idPost;
  const response = await fetch(urlWithId);
  const data = await response.json();

  //console.log(data)

  return data;
};

export { getComments };
