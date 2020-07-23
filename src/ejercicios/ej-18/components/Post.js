import React from "react";
import { Button } from "reactstrap";

const Post = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.body}</p>
        <Button onClick={props.selectPost}>Mostrar Comentarios</Button>
      </div>
    </div>
  );
};

export { Post };
