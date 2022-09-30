import React from "react";
import "./NewsItem.css";
import { Card, Col, Row } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import NewsItemFavoriteBtn from "./NewsItemFavoriteBtn";
import NewsItemDeleteBtn from "./NewsItemDeleteBtn";
import ReadTheArticleBtn from "./ReadTheArticleBtn";
import NewsItemComments from "./NewsItemComments";
import no_pictures from "../../images/no_pictures.png";

const NewsItem = ({ news, category }) => {
  const isDark = useSelector((s) => s.theme.isDark);
  return (
    <div>
      <Row xs={1} md={4} className="g-1">
        {Array.from({ length: 1 }).map(() => (
          <Col key={news.title}>
            <Card className={` card  ${isDark ? "dark" : "light"} `}>
              <Card.Img
                className={`${
                  news.urlToImage ? "card-img-top" : "item-no-pic-img"
                }`}
                variant="top"
                src={news.urlToImage ? news.urlToImage : no_pictures}
                alt={news.title}
              />
              <Card.Body className="card-body d-flex flex-column">
                <div>
                  <NewsItemFavoriteBtn news={news} category={category} />
                  <Card.Title className="card-title">{news.title}</Card.Title>
                  <Card.Text>{news.author}</Card.Text>
                  <Card.Text>{news.publishedAt}</Card.Text>
                  <Card.Text>
                    {news.description ? news.description : "No Description"}
                  </Card.Text>
                </div>
                <div className=" flex-grow-1 d-flex flex-row align-items-end justify-content-between">
                  <ReadTheArticleBtn news={news} category={category} />
                  <div>
                    <NewsItemComments news={news} category={category} />
                    <NewsItemDeleteBtn news={news} category={category} />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default NewsItem;
