import "../components/news/News.css";
import { useSelector } from "react-redux";
import NewsItem from "../components/news-item/NewsItem";
import useNews from "../hooks/useNews";
import { ThreeDots } from "react-loader-spinner";

const News = ({ category }) => {
  useNews(category);
  const news = useSelector((s) => s.news.newsFiltered[category]);
  return news ? (
    <div className="card-container">
      <div className="card-list">
        {news &&
          news.map((n) => (
            <NewsItem key={n.title} news={n} category={category} />
          ))}
      </div>
    </div>
  ) : (
    <div className="min-height">
      <ThreeDots color="#59CE8F" />
    </div>
  );
};

export default News;
