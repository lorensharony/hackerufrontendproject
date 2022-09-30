import React from "react";
import "./NewsItemFavoriteBtn.css";
import { toggleFavorite } from "../../features/news/news-slice";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const NewsItemFavoriteBtn = ({ news, category }) => {
  const dispatch = useDispatch();
  const iconFavoriteStyle = { color: "#dc3545", fontSize: "40px" };

  return (
    <>
      <button
        className="btn border-0 btn-favorite-position"
        onClick={() => {
          if (!news.isFavorite) {
            toast.success("Added To Favorites", {
              position: "top-center",
              style: { textAlign: "center" },
            });
          } else {
            toast.error("Removed From Favorites", {
              position: "top-center",
              style: { textAlign: "center" },
            });
          }
          dispatch(toggleFavorite({ title: news.title, category }));
        }}
      >
        {news.isFavorite && <MdFavorite style={iconFavoriteStyle} />}
        {!news.isFavorite && <MdFavoriteBorder style={iconFavoriteStyle} />}
      </button>
    </>
  );
};

export default NewsItemFavoriteBtn;
