const getUrl = (category) =>
  `https://newsapi.org/v2/top-headlines?` +
  `country=us` +
  `&category=${category}` +
  `&apiKey=f59661807e154109837963aab913fb21`;

export default getUrl;
