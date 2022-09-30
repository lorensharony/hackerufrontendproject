import React from "react";
import "../components/not-found/NotFound404.css";
import { useNavigate } from "react-router-dom";
import error from "../images/error.svg";

const NotFound404 = () => {
  const navigate = useNavigate();

  return (
    <div className=" not-found-height">
      <div className="container not-found-mtb">
        <img className="not-found-img" src={error} alt="404" />
        <h1 className="not-found-h1-text">Ops! You Are Lost... </h1>
        <h3 className="not-found-h2-text">Page Not Found</h3>
        <div className="not-found-btn-container">
          <button
            className="not-found-btn"
            onClick={() => {
              navigate(-1);
            }}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound404;
