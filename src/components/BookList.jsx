import { Col, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = (props) => {
  return (
    <>
      <Row>
        {props.books.map((book) => (
          <Col key={book.asin} sm={4} lg={3}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default BookList;
