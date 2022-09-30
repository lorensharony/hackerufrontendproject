import React from "react";
import "./SingleComment.css";
import EditComment from "./EditComment";
import { useSelector } from "react-redux";
const SingleComment = ({ comment, title, category }) => {
  const isDark = useSelector((s) => s.theme.isDark);
  return (
    <div className="card-body">
      <div className="d-flex flex-column justify-content-between">
        <div className="d-flex flex-row flex-wrap align-items-center">
          <img
            src={comment.userImage}
            alt="avatar"
            width="60"
            height="60"
            className={`${isDark ? "dark" : "light"} `}
          />
          <EditComment {...{ comment, title, category }} />
        </div>
        <p
          className={`${
            isDark
              ? "small comment-text-dark mb-0 text-break dark "
              : "small text-muted mb-0 text-break light"
          } `}
        >
          {comment.content}
        </p>
      </div>
    </div>
  );
};

export default SingleComment;
