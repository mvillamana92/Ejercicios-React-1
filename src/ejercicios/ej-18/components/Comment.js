import React from "react";

const Comment = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <h5>{props.name}</h5>
      </div>
      <div className="card-body">
        <div className="card-text">{props.body}</div>
        <p className="mt-2">{props.email}</p>
      </div>
    </div>
  );
};

export { Comment };
