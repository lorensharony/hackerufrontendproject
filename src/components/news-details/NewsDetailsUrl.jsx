import React from "react";
import { useState } from "react";

const NewsDetailsUrl = ({ news }) => {
  const [show, setshow] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setshow((n) => !n);
        }}
        className="btn btn-primary "
      >
        {show ? "Close" : "Read More"}
      </button>
      <a href={news.url}>
        <br /> <br />
        {show && `${news.url}`}
      </a>
    </div>
  );
};

export default NewsDetailsUrl;
