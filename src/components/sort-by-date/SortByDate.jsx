import React from "react";
import "./SortByDate.css";
import Dropdown from "react-bootstrap/Dropdown";
import { BiSortAlt2 } from "react-icons/bi";
import { sortByDateNewToOld } from "../../features/news/news-slice";
import { sortByDateOldToNew } from "../../features/news/news-slice";

import { useDispatch } from "react-redux";

const SortByDate = () => {
  const dispatch = useDispatch();

  return (
    <Dropdown className="me-2">
      <Dropdown.Toggle
        variant="outline"
        id="dropdown-basic"
        className="sort-font"
        title="Sort By Date"
      >
        <BiSortAlt2 size="1.5rem" />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => {
            dispatch(sortByDateOldToNew());
          }}
        >
          Sort Oldest to Newest
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            dispatch(sortByDateNewToOld());
          }}
        >
          Sort Newest to Oldest
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SortByDate;
