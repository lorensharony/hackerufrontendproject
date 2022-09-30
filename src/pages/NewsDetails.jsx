import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import "../components/news-details/NewsDetails.css";
import NewsDetailsBtn from "../components/news-details/NewsDetailsBtn";
import NewsDetailsUrl from "../components/news-details/NewsDetailsUrl";
import no_pictures from "../images/no_pictures.png";
import { MagnifyingGlass } from "react-loader-spinner";

const NewsDetails = () => {
  const { newsTitle } = useParams();
  const location = useLocation();
  const category = location.state;
  const news = useSelector((state) =>
    state.news.newsFiltered[category].find((n) => n.title === newsTitle)
  );
  const isDark = useSelector((s) => s.theme.isDark);

  return (
    <>
      {news ? (
        <div className="details-card ">
          <div className={` ${isDark ? "mq-shadow dark" : "mq-shadow light"} `}>
            <img
              className={`${news.urlToImage ? "details-img" : "no-pic-img"}`}
              src={news.urlToImage ? news.urlToImage : no_pictures}
              alt="ArticlePhoto"
            />
            <div className="details-body">
              <h3 className="details-title">{news.title}</h3>
              <h5 className="details-author">{news.author}</h5>
              <h6 className="details-date">{news.publishedAt}</h6>
              <p className="details-content">{news.description}</p>
              <p className="details-content">{news.content}</p>
              <div className="d-flex flex-row align-items-start justify-content-between">
                <NewsDetailsUrl news={news} />
                <NewsDetailsBtn />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-height">
          <MagnifyingGlass />
        </div>
      )}
    </>
  );
};

export default NewsDetails;
