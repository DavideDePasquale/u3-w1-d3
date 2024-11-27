import { Card, Container } from "react-bootstrap";

const SingleBook = (prop) => {
  return (
    <Container>
      <Card bg="light">
        <Card.Img variant="top" src={prop.book.img} />
        <Card.Body>
          <Card.Title>{prop.book.title}</Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default SingleBook;
