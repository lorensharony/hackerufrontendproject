import { useDispatch } from "react-redux";
import { search } from "../../features/news/news-slice";

import { Form } from "react-bootstrap";

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={(e) => dispatch(search(e.target.value))}
      />
    </Form>
  );
};

export default SearchBar;
