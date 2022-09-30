import React from "react";
import "./ReadTheArticleBtn.css";
import { useNavigate } from "react-router-dom";

const ReadTheArticleBtn = ({ news, category }) => {
  const navigate = useNavigate();

  return (
    <button
      className="btn-read-the-article"
      onClick={() => {
        navigate(`/news/${news.title}`, { state: category });
      }}
    >
      Read The Article
    </button>
  );
};

export default ReadTheArticleBtn;
