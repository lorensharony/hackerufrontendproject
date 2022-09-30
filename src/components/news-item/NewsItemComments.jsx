import React from "react";
import "./NewsItemComments.css";
import { AiOutlineComment } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NewsItemComments = ({ news, category }) => {
  const isDark = useSelector((s) => s.theme.isDark);
  const navigate = useNavigate();

  return (
    <>
      <button className="btn border-0">
        <AiOutlineComment
          size="1.5rem"
          className={` ${isDark ? "edit-icon dark" : "light"} `}
          title="Add Comment"
          onClick={() => navigate("/comments", { state: { news, category } })}
        />
      </button>
    </>
  );
};

export default NewsItemComments;
