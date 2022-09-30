import React from "react";
import "./TopNav.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { DiProlog } from "react-icons/di";
import TopNavLink from "./TopNavLink";
import TopNavDropdown from "./TopNavDropdown";
import TopNavDarkModeBtn from "./TopNavDarkModeBtn";
import SearchBar from "../../components/search-bar/SearchBar";
import SortByDate from "../sort-by-date/SortByDate";

const TopNav = () => {
  return (
    <Navbar bg="danger" expand="lg" variant="dark" className="nav-shadow">
      <Container fluid>
        <NavLink to="/" className="navbar-brand">
          <DiProlog color="#000000" size="3.5rem" />
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <TopNavLink to="/news" label="Home" />
            <TopNavLink to="/favorites" label="Favorites" />
            <TopNavLink to="/about" label="About" />
            <TopNavDropdown />
            <TopNavDarkModeBtn />
          </Nav>
          <SortByDate />
          <SearchBar />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
