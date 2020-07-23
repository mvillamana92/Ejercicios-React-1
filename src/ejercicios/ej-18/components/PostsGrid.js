import React, { useState, useEffect, useContext } from "react";
import { Spinner } from "reactstrap";
import { Post } from "./Post";
import PostsContext from "../context/PostsContext";

const PostsGrid = (props) => {
  const posts = useContext(PostsContext);

  return (
    <div className="border">
      <h1 className="text-center">POSTS</h1>
      {posts.postsArray ? (
        posts.postsArray.map((value) => {
          return (
            <Post
              title={value.title}
              body={value.body}
              selectPost={() => {
                posts.selectPost(value.id);
              }}
            />
          );
        })
      ) : (
        <div>
          <Spinner />
          <p>Cargando POSTS...</p>
        </div>
      )}
    </div>
  );
};

export { PostsGrid };
