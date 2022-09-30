import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { fetchNews } from "../features/news/news-slice";

const useNews = (category) => {
  const dispatch = useDispatch();
  const selectNews = useSelector((state) => state.news.news[category]);
  const location = useLocation();
  useEffect(() => {
    if (selectNews && selectNews.length > 0) return;
    dispatch(fetchNews({ category }));
  }, [location, category, dispatch, selectNews]);
};

export default useNews;
