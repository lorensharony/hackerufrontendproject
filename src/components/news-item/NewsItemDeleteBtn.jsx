import React from "react";
import "./NewsItemDeleteBtn.css";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { RemoveNews } from "../../features/news/news-slice";
import { useSelector } from "react-redux";

const NewsItemDeleteBtn = ({ news, category }) => {
  const isDark = useSelector((s) => s.theme.isDark);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(RemoveNews({ news: news.title, category }));
  };

  return (
    <button className="btn border-0 delete-item" onClick={handleDelete}>
      <RiDeleteBin5Line
        size="1.5rem"
        className={` ${isDark ? "delete-icon dark" : " light"} `}
      />
    </button>
  );
};

export default NewsItemDeleteBtn;
