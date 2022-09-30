import React from "react";
import { useNavigate } from "react-router-dom";

const NewsDetailsBtn = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate(-1);
      }}
      className="btn btn-primary back-btn"
    >
      Go&nbsp;Back
    </button>
  );
};

export default NewsDetailsBtn;
