import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { PostsGrid } from "./PostsGrid";
import { CommentsGrid } from "./CommentsGrid";
import CommentsContext from "../context/CommentsContext";
import PostsContext from "../context/PostsContext";

import { getPosts } from "../api/get-posts";
import { getComments } from "../api/get-comments";

const Content = () => {
  useEffect(() => {
    const fetchData = async () => {
      const postsData = await getPosts();
      //console.log(postsData);
      setPosts({ ...posts, postsArray: postsData });
    };
    fetchData();
  }, []);

  const selectPost = (idPost) => {
    //console.log(idPost);
    const fetchData = async () => {
      const commentsData = await getComments(idPost);
      //console.log(commentsData);
      setComments(commentsData);
    };
    fetchData();
  };

  const [posts, setPosts] = useState({
    postsArray: [],
    selectPost: selectPost,
  });

  const [comments, setComments] = useState();

  return (
    <Container>
      <PostsContext.Provider value={posts}>
        <CommentsContext.Provider value={comments}>
          <Row>
            <Col>
              <PostsGrid />
            </Col>
            <Col>
              <CommentsGrid />
            </Col>
          </Row>
        </CommentsContext.Provider>
      </PostsContext.Provider>
    </Container>
  );
};

export { Content };
