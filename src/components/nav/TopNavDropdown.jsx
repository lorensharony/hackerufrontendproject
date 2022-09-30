import React from "react";
import { NavDropdown } from "react-bootstrap";
import TopNavLink from "./TopNavLink";

const TopNavDropdown = () => {
  return (
    <NavDropdown title="Topics" id="navbarScrollingDropdown">
      <TopNavLink to="/science" label="Science" />
      <TopNavLink to="/health" label="Health" />
      <TopNavLink to="/sports" label="Sports" />
      <TopNavLink to="/entertainment" label="Entertainment" />
      <TopNavLink to="/technology" label="Technology" />
      <TopNavLink to="/business" label="Business" />
    </NavDropdown>
  );
};

export default TopNavDropdown;
