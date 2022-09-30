import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { editComment } from "../../features/news/news-slice";

const EditComment = ({ comment, title, category }) => {
  const isDark = useSelector((s) => s.theme.isDark);
  const dispatch = useDispatch();
  const handleEditComment = (e) => {
    e.preventDefault();
    const content = e.target[0].value;
    const newComment = { ...comment, content };
    dispatch(
      editComment({
        comment: newComment,
        title,
        category,
      })
    );
    e.target[0].value = "";
  };
  return (
    <form onSubmit={handleEditComment}>
      <input type="text" />
      <button type="submit" className="btn border-0">
        <AiOutlineEdit
          title="Edit"
          className={`${isDark ? "dark" : "light"} `}
        />
      </button>
    </form>
  );
};

export default EditComment;
