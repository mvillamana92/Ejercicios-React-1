import React, { useState, useEffect, useContext } from "react";
import CommentsContext from "../context/CommentsContext";
import { Comment } from "./Comment";
import { Spinner } from "reactstrap";

const CommentsGrid = (props) => {
  const comments = useContext(CommentsContext);

  return (
    <div className="border">
      <h1 className="text-center">COMMENTS</h1>
      {comments
        ? comments.map((value) => {
            return (
              <Comment
                name={value.name}
                body={value.body}
                email={value.email}
              />
            );
          })
        : null}
    </div>
  );
};

export { CommentsGrid };
