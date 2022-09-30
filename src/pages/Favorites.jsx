import React from "react";
import { useSelector } from "react-redux";
import NewsItem from "../components/news-item/NewsItem";

const Favorites = () => {
  const selectedNewsFavorites = useSelector((currentState) => {
    const newsEntries = Object.entries(currentState.news.news);
    let allNewsWithCategories = [];
    for (let [category, news] of newsEntries)
      allNewsWithCategories.push(...news.map((n) => ({ ...n, category })));
    return allNewsWithCategories;
  }).filter((n) => n.isFavorite);

  return (
    <div className="card-container card-list min-height">
      {selectedNewsFavorites &&
        selectedNewsFavorites.map((n) => (
          <NewsItem key={n.title} news={n} category={n.category} />
        ))}
    </div>
  );
};

export default Favorites;
